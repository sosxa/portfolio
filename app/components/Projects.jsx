'use client';
import React, { useState } from 'react';
import { PROJECTS } from "../constants";
import Image from 'next/image';

const Projects = () => {
    return (
        <div>
            <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200">
                Projects
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {PROJECTS.map((project, index) => {
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                        <div key={index}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                {isHovered ? (
                                    <Image
                                        src={project.video}
                                        alt={project.name}
                                        width={300}
                                        className="rounded-3xl"
                                    />
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={300}
                                        className="rounded-3xl"
                                    />
                                )}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
