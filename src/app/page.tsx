"use client";
import { useState, useEffect } from "react";
import Card from "./components/Card";

interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}
export default function Home() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/dummy.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex m-10 flex-wrap">
        {data.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            altText={item.altText}
          />
        ))}
      </div>
    </div>
  );
}
