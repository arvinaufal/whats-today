import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <>
            <Skeleton variant="rounded" width={210} height={60} />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </>
    )
}