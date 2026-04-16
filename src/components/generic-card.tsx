import React from "react";
import { ChevronRight } from "lucide-react";

interface ContentType {
  image?: string;
  imageAlt?: string;
  tags?: string[];
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

interface GenericCardProps {
  bgColor: string; // Tailwind bg color: 'bg-blue-50', 'bg-slate-100', etc.
  textColor: string; // Tailwind text color: 'text-blue-600', 'text-slate-900', etc.
  content: ContentType;
}

export const GenericCard: React.FC<GenericCardProps> = ({
  bgColor,
  textColor,
  content,
}) => {
  const {
    image,
    imageAlt = "Card image",
    tags = [],
    title,
    description,
    ctaText = "View Details",
    ctaHref = "#",
  } = content;

  // Parse color to determine overlay intensity
  const getOverlayOpacity = (color: string) => {
    if (color.includes("slate")) return "bg-slate-900/10";
    if (color.includes("blue")) return "bg-blue-900/10";
    if (color.includes("indigo")) return "bg-indigo-900/10";
    if (color.includes("purple")) return "bg-purple-900/10";
    if (color.includes("pink")) return "bg-pink-900/10";
    if (color.includes("red")) return "bg-red-900/10";
    if (color.includes("green")) return "bg-green-900/10";
    return "bg-slate-900/10";
  };

  // Derive accent colors based on textColor
  const getTagBgColor = (color: string) => {
    if (color.includes("blue")) return "bg-blue-50";
    if (color.includes("indigo")) return "bg-indigo-50";
    if (color.includes("purple")) return "bg-purple-50";
    if (color.includes("pink")) return "bg-pink-50";
    if (color.includes("red")) return "bg-red-50";
    if (color.includes("green")) return "bg-green-50";
    return "bg-slate-50";
  };

  return (
    <div
      className={`${bgColor} rounded-4xl dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 cursor-pointer`}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className={`absolute inset-0 ${getOverlayOpacity(textColor)} group-hover:bg-transparent transition-colors`}
          ></div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-8">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagBgColor(textColor)} ${textColor}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className={`text-xl font-bold ${textColor} mb-2 transition-colors group-hover:opacity-80`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {/* CTA Link */}
        <a
          href={ctaHref}
          className={`inline-flex items-center gap-2 text-sm font-bold ${textColor} hover:opacity-70 transition-all`}
        >
          {ctaText} <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default GenericCard;
