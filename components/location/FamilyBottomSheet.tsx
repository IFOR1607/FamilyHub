"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Clock3, ChevronUp, MapPin, ShieldCheck } from "lucide-react";
import { useLocation } from "@/contexts/LocationContext";
import { familyMembers } from "@/lib/dummy/family";
import MemberDetail from "@/components/location/MemberDetail";

const SNAP_POINTS = {
  peek: 28,
  medium: 58,
  full: 90,
} as const;

const SNAP_POINT_ORDER = ["peek", "medium", "full"] as const;
const SWIPE_VELOCITY = 500;
const VELOCITY_PROJECTION = 0.12;
const HANDLE_HEIGHT = 48;
const modeTransition = { duration: 0.25 };

type SnapPoint = (typeof SNAP_POINT_ORDER)[number];

const getSheetHeight = (snapPoint: SnapPoint) => `${SNAP_POINTS[snapPoint]}%`;

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

const getClosestSnapPoint = (targetHeight: number, containerHeight: number) =>
  SNAP_POINT_ORDER.reduce((closestPoint, point) => {
    const closestDistance = Math.abs(
      containerHeight * (SNAP_POINTS[closestPoint] / 100) - targetHeight
    );
    const currentDistance = Math.abs(
      containerHeight * (SNAP_POINTS[point] / 100) - targetHeight
    );

    return currentDistance < closestDistance ? point : closestPoint;
  });

export default function FamilyBottomSheet() {
  // Hooks
  const dragControls = useDragControls();
  const dragY = useMotionValue(0);
  const sheetRef = useRef<HTMLDivElement>(null);
  const { selectedMember, setSelectedMember } = useLocation();

  // State
  const [snapPoint, setSnapPoint] = useState<SnapPoint>("peek");
  const [containerHeight, setContainerHeight] = useState(0);
  const hasSelectedMember = Boolean(selectedMember);
  const isFullScreen = snapPoint === "full";

  // Animation logic
  const minimumHeight = containerHeight * (SNAP_POINTS.peek / 100);
  const currentHeight = containerHeight * (SNAP_POINTS[snapPoint] / 100);
  const maximumHeight = containerHeight * (SNAP_POINTS.full / 100);
  const dragConstraints = {
    top: -(maximumHeight - currentHeight),
    bottom: currentHeight - minimumHeight,
  };

  useEffect(() => {
    const container = sheetRef.current?.parentElement;

    if (!container) return;

    const updateContainerHeight = () => {
      setContainerHeight(container.clientHeight);
    };

    updateContainerHeight();

    const resizeObserver = new ResizeObserver(updateContainerHeight);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  // Helpers
  const getNextSnapPoint = () => {
    const currentIndex = SNAP_POINT_ORDER.indexOf(snapPoint);
    const nextIndex = (currentIndex + 1) % SNAP_POINT_ORDER.length;

    return SNAP_POINT_ORDER[nextIndex];
  };

  // Event handlers
  const handleHandleClick = () => {
    setSnapPoint(getNextSnapPoint());
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    if (!containerHeight) return;

    const velocityOffset =
      Math.abs(info.velocity.y) > SWIPE_VELOCITY
        ? info.velocity.y * VELOCITY_PROJECTION
        : 0;
    const projectedHeight = currentHeight - info.offset.y - velocityOffset;
    const targetHeight = clamp(projectedHeight, minimumHeight, maximumHeight);

    setSnapPoint(getClosestSnapPoint(targetHeight, containerHeight));
    animate(dragY, 0, { type: "spring", stiffness: 300, damping: 32 });
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number } }
  ) => {
    const clampedY = clamp(info.offset.y, dragConstraints.top, dragConstraints.bottom);

    dragY.set(clampedY);
  };

  const handleSelectMember = (member: (typeof familyMembers)[number]) => {
    setSelectedMember(member);
  };

  const handleBackToFamilyList = () => {
    setSelectedMember(null);
  };

  const handleDragStart = (event: React.PointerEvent<HTMLElement>) => {
    dragControls.start(event);
  };

  return (
    <motion.div
      ref={sheetRef}
      drag="y"
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={dragConstraints}
      dragElastic={0}
      dragMomentum={false}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={{ height: getSheetHeight(snapPoint) }}
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
      style={{ y: dragY }}
      className="
      absolute
      bottom-0
      left-0
      right-0

      bg-white/95
      backdrop-blur-2xl

      rounded-t-[34px]

      border-t
      border-white

      shadow-[0_-20px_60px_rgba(0,0,0,.15)]

      z-40

      overflow-hidden
      "
    >
      {/* Drag handle */}
      <button
        onPointerDown={handleDragStart}
        onClick={handleHandleClick}
        aria-label="Ubah tinggi panel keluarga"
        className="flex h-12 w-full touch-none justify-center py-3"
      >
        <div className="w-14 h-1.5 rounded-full bg-slate-300" />
      </button>

      <div
        style={
          {
            "--sheet-handle-height": `${HANDLE_HEIGHT}px`,
          } as CSSProperties
        }
        className={`h-[calc(100%-var(--sheet-handle-height))] ${
          isFullScreen ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {hasSelectedMember ? (
            <motion.div
              key="member-detail"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={modeTransition}
              className="pb-6"
            >
              <MemberDetail
                member={selectedMember}
                onBack={handleBackToFamilyList}
                onDragStart={handleDragStart}
              />
            </motion.div>
          ) : (
            <motion.div
              key="family-list"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={modeTransition}
            >
              {/* Drag area and list header */}
              <div onPointerDown={handleDragStart} className="px-5 touch-none">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-lg text-slate-800">
                      5 Anggota Aktif
                    </h2>

                    <div className="flex items-center gap-2 mt-1">
                      <ShieldCheck size={16} className="text-emerald-600" />

                      <span className="text-sm font-semibold text-slate-700">
                        Semua anggota dalam kondisi aman
                      </span>
                    </div>
                  </div>

                  <ChevronUp size={22} className="text-slate-500" />
                </div>
              </div>

              {/* Family list */}
              <div className="mt-5 px-4 space-y-3">
                {familyMembers.map((member) => (
                  <motion.button
                    layout
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className={`
                      w-full
                      rounded-2xl
                      px-4
                      py-3
                      flex
                      items-center
                      justify-between
                      transition-all

                      ${
                        selectedMember?.id === member.id
                          ? "bg-sky-50 ring-2 ring-sky-400 shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          w-11
                          h-11
                          rounded-full
                          ${member.color}

                          flex
                          items-center
                          justify-center

                          text-white
                          font-bold
                        `}
                      >
                        {member.name[0]}
                      </div>

                      <div className="text-left">
                        <div className="font-semibold text-slate-800">
                          {member.name}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={13} />
                          <span>{member.city}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold text-sm text-slate-800">
                        {member.distance}
                      </div>

                      <div className="flex items-center justify-end gap-1 text-xs text-slate-500">
                        <Clock3 size={13} />
                        {member.eta}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
