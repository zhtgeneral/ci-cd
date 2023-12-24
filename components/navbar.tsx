'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])

  const router = useRouter();

  if (!isMounted) {
    return null; 
  }

  while (!router) {
    return null; 
  }

  return (
    <div>
      <Button onClick={() => router.push('/other')}>
        navbar todo
      </Button>
    </div>
  )
}

export default NavBar;