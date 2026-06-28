"use server";
import axios from "axios";
import { cookies, headers } from "next/headers";
import { getCustomerId } from "./auth";
// Define types for our job creation and requirements
interface JobRequirement {
  skill_type: string;
  worker_count_needed: number;
  rate_per_day: number;
}

interface CreateJobRequest {
  customer_id?: string;
  latitude: number;
  longitude: number;
  location: string;
  requirements: JobRequirement[];
}

interface AddRequirementRequest {
  skill_type: string;
  worker_count_needed: number;
  rate_per_day: number;
  wave_size: number;
}

interface CreateJobResponse {
  id: string;
  [key: string]: any;
}

async function createJob(data: CreateJobRequest): Promise<CreateJobResponse> {
  console.log(data);
  try {
    const customerId = await getCustomerId();
    data.customer_id = customerId;
    console.log(data);
    const tokenValue = (await cookies()).get("auth_token")?.value;
    const res = await axios.post(
      `${process.env.BACKEND_URL}/api/jobs`,
      data, // 2nd arg: The payload
      {
        headers: {
          authorization: `Bearer ${tokenValue}`,
          "Content-Type": "application/json",
        },
      } // 3rd arg: The config object
    );
    return res.data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error as Error;
  }
}

async function addJobRequirement(
  jobId: string,
  data: AddRequirementRequest
) {
  console.log(data, jobId);
  try {
    const tokenValue = (await cookies()).get("auth_token")?.value;
    const res = await axios.post(
      `${process.env.BACKEND_URL}/api/jobs/${jobId}/requirements`,
      data,
      {
        headers: {
          authorization: `Bearer ${tokenValue}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error adding job requirement:", error);
    throw error as Error;
  }
}

async function getJob() {
  const res = await axios.get(`${process.env.BACKEND_URL}/job`);
  console.log(res.data);
}

export { createJob, getJob, addJobRequirement };
