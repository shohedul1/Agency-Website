'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMonitor, PiStorefront } from 'react-icons/pi'

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 bg-blue-600" /></div>,
        title: "Website Desing",
        description: "We build fully responsive websites that look great on all devices. our",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 bg-blue-600" /></div>,
        title: "E-commerce Stare",
        description: "We build fully responsive websites that look great on all devices. our ",

    },

    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 bg-blue-600" /></div>,
        title: "Autentication",
        description: "We build fully responsive websites that look great on all devices. our",

    },

    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 bg-blue-600" /></div>,
        title: "Social Media",
        description: "We build fully responsive websites that look great on all devices. our",

    },

    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 bg-blue-600" /></div>,
        title: "App Development",
        description: "We build fully responsive websites that look great on all devices. our",

    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 bg-blue-600" /></div>,
        title: "Support",
        description: "We build fully responsive websites that look great on all devices. our",

    },


];
