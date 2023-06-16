export type IAuthContext = {
    tokens: { access_token?: string; refresh_token?: string };
    profileInfo: { [key: string]: string };
    isLoading?: boolean;
    login?: (data: any) => void;
    logout?: () => void;
    fetchProfileDetails?: () => void;
};

export type ITodo = {
    text: string;
    done: boolean;
    todo?: ITodo[];
};
export type ITodoContext = { todo?: ITodo[]; setTodo?: React.Dispatch<React.SetStateAction<ITodo[]>> };
