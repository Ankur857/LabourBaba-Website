"use client";

import { io, Socket } from "socket.io-client";

// Initialize socket with proper configuration
let socket: Socket | null = null;

// Flag to disable socket.io by default
const SOCKET_ENABLED = true;

// Get socket instance - singleton pattern
export const getSocket = (): Socket | null => {
  if (!SOCKET_ENABLED) {
    console.log("[socket.io] Socket.io is disabled");
    return null;
  }

  if (!socket) {
    const backendUrl = process.env.BACKEND_URL || window.location.origin;
    
    console.log(`[socket.io] Connecting to: ${backendUrl}`);
    
    socket = io(backendUrl, {
      path: "/socket.io/",
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socket.on("connect", () => {
      console.log("[socket.io] Connected to server with ID:", socket?.id);
    });

    socket.on("disconnect", (reason) => {
      console.log("[socket.io] Disconnected:", reason);
    });

    socket.on("connect_error", (error) => {
      console.error("[socket.io] Connection error:", error);
    });
  }
  return socket;
};
const demoSocket = getSocket();
// Join customer room - this should be called when customer creates a job
export const joinCustomerRoom = async (customerId: string): Promise<void> => {
  if (!SOCKET_ENABLED) {
    console.log("[socket.io] Socket.io is disabled - skipping room join");
    return;
  }

  try {
    const socketInstance = getSocket();
    if (socketInstance) {
      socketInstance.emit("join:customer", customerId);
      console.log(`[socket.io] Joining room for customer ${customerId}`);
    }
  } catch (error) {
    console.error("[socket.io] Error joining customer room:", error);
  }
};

// Disconnect socket manually if needed
export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export { socket };
