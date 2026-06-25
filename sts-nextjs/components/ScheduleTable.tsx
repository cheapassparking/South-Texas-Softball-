"use client";

import { useState } from "react";
import type { ScheduleRow } from "@/lib/schedule-data";

type ScheduleTableProps = {
  tournaments: ScheduleRow[];
  practiceDates: ScheduleRow[];
};

export default function ScheduleTable({ tournaments, practiceDates }: ScheduleTableProps) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "results">("upcoming");

  const rows = activeTab === "upcoming" ? tournaments : practiceDates;

  return (
    <>
      <div className="schedule-tabs">
        <button
          className={`s-tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Tournaments
        </button>
        <button
          className={`s-tab ${activeTab === "results" ? "active" : ""}`}
          onClick={() => setActiveTab("results")}
        >
          Practice Dates
        </button>
      </div>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.date}</td>
              <td>{row.event}</td>
              <td>{row.location}</td>
              <td>
                <div className="badge-row">
                  {row.badges.map((badge, j) => (
                    <span key={j} className={`badge-${badge.type}`}>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
