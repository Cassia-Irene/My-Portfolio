import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sectionn = ["00", "02", "03", "04"];

const SidebarNavigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);
}