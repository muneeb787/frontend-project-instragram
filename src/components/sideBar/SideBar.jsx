import { Link } from 'react-router-dom';
import { useState } from 'react'
import { motion } from "framer-motion"
import "./search.css";
import "./SideBar.css";
import CreatePost from '../Models/createPostModel';
import { logout } from '../../redux/authSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    navigate("/login")
  };

  const handleToggle = () => {
    const root = document.querySelector("html")
    setIsDarkMode(!isDarkMode);
    if (isDarkMode == true) {
      root.setAttribute("data-theme", "dark")
    }
    else {
      root.setAttribute("data-theme", "light")
    }
  };

  const [isMoreModelopen, setIsMoreModel] = useState(false)

  const handleIsMoreModel = () => {
    setIsMoreModel(!isMoreModelopen)
  }

  const [expandSidebar, setExpandSidebar] = useState(true)

  const handleExpandSidebarTrue = () => {
    setExpandSidebar(true)
  }
  const handleExpandSidebarFalse = () => {
    setExpandSidebar(false)
  }

  const [expandSearchSidebar, setExpandSearchSidebar] = useState(false)

  const handleExpandSearchSidebarTrue = () => {
    setExpandSearchSidebar(true)
  }
  const handleExpandSearchSidebarFalse = () => {
    setExpandSearchSidebar(false)
  }

  const [expandNotificationSidebar, setExpandNotificationSidebar] = useState(false)

  const handleExpandNotificationSidebarTrue = () => {
    setExpandNotificationSidebar(true)
  }
  const handleExpandNotificationSidebarFalse = () => {
    setExpandNotificationSidebar(false)
  }
  const [CreatePostModel, setCreatePostModel] = useState(false)

  const handleCreatePostModelTrue = () => {
    setCreatePostModel(true)
  }
  const handleCreatePostModelFalse = () => {
    setCreatePostModel(false)
  }


  return (
    <div className='flex'>
      <aside
        id="logo-sidebar"
        className="bg-background text-content top-0 left-0 z-40 h-screen md:block hidden border-e-2 border-secondary"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 text-content bg-background">
          {/* <Link href="https://flowbite.com/" > */}
          <div className="_aagx">
            <div className="flex items-center pl-1 mb-5">
              {expandSidebar ? <motion.svg
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '-100%' }}
                aria-label="Instagram"
                className="_ab6- text-content"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="29"
                role="img"
                viewBox="32 4 113 32"
                width="103"
              >
                <path
                  clipRule="evenodd"
                  d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </motion.svg> : <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-instagram text-content mb-1" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>}
            </div>
          </div>
          <div style={{ height: "90%" }} className='flex flex-col justify-between'>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                  }}
                  to={"/"}
                  className="flex items-center p-2 rounded-lg text-content cursor-pointer hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                    <svg
                      aria-label="Home"
                      className="_ab6- text-content"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <path
                        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>

                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Home</motion.span> : null}
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    handleExpandSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSearchSidebarTrue()
                  }}
                  className="flex items-center p-2 rounded-lg text-content cursor-pointer hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                    <svg
                      aria-label="Search"
                      className="_ab6- text-content"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <path
                        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="16.511"
                        x2="22"
                        y1="16.511"
                        y2="22"
                      ></line>
                    </svg>
                  </div>

                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Search</motion.span> : null}

                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                  }}
                  className="flex items-center p-2 rounded-lg cursor-pointer text-content hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                    <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                      <svg
                        aria-label="Explore"
                        className="_ab6- text-content"
                        color="rgb(0, 0, 0)"
                        fill="rgb(0, 0, 0)"
                        height="30"
                        role="img"
                        viewBox="0 0 24 24"
                        width="30"
                      >
                        <polygon
                          fill="none"
                          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polygon>
                        <polygon
                          fillRule="evenodd"
                          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                        ></polygon>
                        <circle
                          cx="12.001"
                          cy="12.005"
                          fill="none"
                          r="10.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Explore</motion.span> : null}

                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                  }}
                  className="flex items-center p-2 rounded-lg cursor-pointer text-content hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 x11xpdln xvy4d1p x1o5bo1o x1eub6wo x19c4wfv">
                    <svg
                      aria-label="Reels"
                      className="_ab6- text-content"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="2.049"
                        x2="21.95"
                        y1="7.002"
                        y2="7.002"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="13.504"
                        x2="16.362"
                        y1="2.001"
                        y2="7.002"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="7.207"
                        x2="10.002"
                        y1="2.11"
                        y2="7.002"
                      ></line>
                      <path
                        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Reels</motion.span> : null}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                  }}
                  className="flex items-center p-2 rounded-lg cursor-pointer text-content hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                    <svg
                      aria-label="Messenger"
                      className="_ab6- text-content"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <path
                        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="1.739"
                      ></path>
                      <path
                        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Messages</motion.span> : null}

                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleExpandNotificationSidebarTrue()
                    handleExpandSearchSidebarFalse()
                    handleExpandSidebarFalse()
                  }}
                  className="flex items-center p-2 rounded-lg cursor-pointer text-content hover:bg-secondary group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-3 text-lg ${expandSidebar ? "pr-8" : ''}`}>Notifications</motion.span> : null}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                    handleCreatePostModelTrue()
                  }}
                  className="flex items-center p-2 rounded-lg cursor-pointer  text-content hover:bg-secondary group"
                >
                  <div className="x9f619 xxk0z11 x11xpdln xvy4d1p x1o5bo1o x1eub6wo x19c4wfv">
                    <svg
                      aria-label="New post"
                      className="_ab6- text-content"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="30"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30"
                    >
                      <path
                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="6.545"
                        x2="17.455"
                        y1="12.001"
                        y2="12.001"
                      ></line>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="12.003"
                        x2="12.003"
                        y1="6.545"
                        y2="17.455"
                      ></line>
                    </svg>
                  </div>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Create</motion.span> : null}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleExpandSearchSidebarFalse()
                    handleExpandNotificationSidebarFalse()
                    handleExpandSidebarTrue()
                  }}
                  to={"/profilePage"}
                  className="flex items-center p-2 rounded-lg cursor-pointer text-content hover:bg-secondary group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-content"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {expandSidebar ? <motion.span initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: '-100%' }} className={`ml-5 text-lg`}>Profile</motion.span> : null}

                </Link>
              </li>

            </ul>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  onClick={handleIsMoreModel}
                  className="flex items-center p-2 rounded-lg text-content cursor-pointer hover:bg-secondary group relative"
                >
                  <div className="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p"><svg aria-label="Settings" className="_ab6- text-content" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="30" role="img" viewBox="0 0 24 24" width="30"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="20" y2="20"></line></svg></div>

                  <span className={`flex-1 ml-3 text-lg whitespace-nowrap ${expandSidebar ? "" : 'hidden'}`}>More</span>

                  <div className={`absolute w-48 bottom-11 z-10 bg-gray-500 p-1 rounded-md ${isMoreModelopen ? "" : "hidden"}`}>
                    <div className="text-sm">
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#">
                            <span>Settings</span>
                          </Link></li>
                        <li>
                          <Link className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#">
                            <span>Your activity</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#">
                            <span>Saved</span>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={handleToggle} className="flex justify-between items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#">
                            <span>Switch apperance</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input onChange={handleToggle} value={isDarkMode} type="checkbox" className="sr-only peer" />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                          </Link>
                        </li>
                        <li>
                          <Link className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#">
                            <span>Report a problem</span>
                          </Link></li>
                        <li>
                          <Link className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" href="#" >
                            <span>Switch accounts</span>
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link onClick={() => {
                            handleLogout();
                          }} className="flex items-center p-2 rounded-md text-content hover:bg-gray-700 group" >
                            <span>Log out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {expandSearchSidebar ? <motion.div initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }} className="bg-background text-content border-e-2 border-secondary w-80 transition-transform-translate-x-full sm:translate-x-0">

        <div className='p-5'>
          <h1 className='font-bold text-xl mb-5'>Search</h1>
          <div className='flex items-center justify-between w-full rounded-md bg-secondary px-3 py-1 mb-5'>
            <input
              placeholder='search'
              className='bg-transparent border-none focus:border-none outline-none'
              type="text"
            />
            <svg className="h-5 w-5 cursor-pointer text-white" fill="#FFFFFF" viewBox="0 0 24 24" stroke="#000000">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className='border-t-2 border-secondary'>
            <h3 className='my-3 font-medium'>Recent</h3>
          </div>
        </div>
      </motion.div> : <></>}
      {expandNotificationSidebar ? <motion.div initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }} className="bg-background text-content border-e-2 border-secondary w-80 transition-transform-translate-x-full sm:translate-x-0">
        <div className='p-5'>
          <h1 className='font-bold text-xl mb-5'>Notifications</h1>

        </div>
      </motion.div> : <></>}
      {CreatePostModel ? <CreatePost closeModel={handleCreatePostModelFalse} /> : ""}
    </div>
  );
};
export default Sidebar;
