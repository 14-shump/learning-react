import React from "react";
import Star from "./Star";

export default function StarRating({ totalStars = 5, selectedStar = 0, onRate = f => f }) {
    return (
        <>
            {[...Array(totalStars)].map((n, i) => (
                <Star key={i} selected={selectedStar > i} onSelect={() => onRate(i + 1)} />
            ))}
            <p>
                {selectedStar} or {totalStars} stard
            </p>
        </>
    );
};