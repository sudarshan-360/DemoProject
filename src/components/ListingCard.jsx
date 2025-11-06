import React from "react";

export default function ListingCard({
  icon,
  title,
  description,
  color,
  iconName,
}) {
  const colorMap = {
    purple: {
      border: "#7126B5",
      iconColor: "#7126B5",
    },
    green: {
      border: "#5E9D76",
      iconColor: "#5E9D76",
    },
    red: {
      border: "#A8554E",
      iconColor: "#A8554E",
    },
    blue: {
      border: "#4A90E2",
      iconColor: "#4A90E2",
    },
  };

  const colors = colorMap[color] || colorMap.purple;

  return (
    <div
      className="card h-100 listing-card"
      style={{
        backgroundColor: "white",
        borderColor: colors.border,
        borderWidth: "2px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
        e.currentTarget.style.borderColor = colors.border;
        e.currentTarget.style.borderWidth = "2px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = colors.border;
        e.currentTarget.style.borderWidth = "2px";
      }}
    >
      <div className="card-body p-4 p-md-5 d-flex flex-column">
        <div className="d-flex align-items-center gap-3 mb-3">
          <i
            className={`bi bi-${iconName}`}
            style={{
              fontSize: "32px",
              color: colors.iconColor,
            }}
          ></i>
          <h5
            className="card-title mb-0 fw-bold"
            style={{
              color: "#212529",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            {title}
          </h5>
        </div>
        <p
          className="card-text mb-0 flex-grow-1"
          style={{
            color: "#212529",
            fontSize: "1rem",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
