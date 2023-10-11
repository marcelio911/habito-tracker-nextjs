import { Button } from "@nextui-org/react"
import { BugButtonProps } from "@/types"
import Link from "next/link"


export const BugButton: React.FC<BugButtonProps> = ({
    size = "lg",
    label="Button",
    destination,
    color = "primary",
    variant = "solid",
    clickHandler,
    isIconOnly = false,
    iconStart,
    iconEnd,
    isDisabled = false,
    isLoading = false,
    fullWidth = true,
    children,
    id,
}) => {

    return (
        <Button
            size={size}
            as={Link}
            href={id ? destination + "/" + id : destination}
            color={color}
            variant={variant}
            className="w-full font-bold py-2 px-4  h-12 px-6 transition-colors duration-150 rounded-md focus:shadow-outline "
            startContent={iconStart}
            endContent={iconEnd}
            fullWidth={fullWidth}
            isIconOnly={isIconOnly}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onClick={clickHandler}
        >

           <span className="w-full">  {children ?? label}  </span>

        </Button>


    )}