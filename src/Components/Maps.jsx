import React from "react";

export default function Maps() {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4750521012297!2d-49.235687225634074!3d-16.703132345986077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3f3bd3069e1%3A0xaaaa8f2b51015d07!2sHJ%20Systems!5e0!3m2!1spt-BR!2sbr!4v1711983982731!5m2!1spt-BR!2sbr"
                className="maps"
                height="400"
                width="100%" 
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
