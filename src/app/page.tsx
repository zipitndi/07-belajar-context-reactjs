'use client';
import MainPage from "./components/templates/main_page";
import ProfilePage from "./components/templates/profile_page";
import Image from "next/image";
import MyApp from "./components/atoms/myapp";
import { Main } from "next/document";


export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined} />;
}