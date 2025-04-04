import { useState, useEffect } from 'react';

// Định nghĩa kiểu dữ liệu cho một Project
interface Project {
    id: string;
    imgPath: string;
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    createdAt: string;
    updatedAt: string;
}

const useFetchProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:8081/v1/api/projects");
                const result = await response.json();
                if (result.errorCode === 0) {
                    setProjects(result.data);
                } else {
                    throw new Error("Failed to fetch projects");
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};

export default useFetchProjects;