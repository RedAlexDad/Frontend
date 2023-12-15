import {createSlice} from "@reduxjs/toolkit";

interface MarsStation {
    id: number;
    type_status: string;
    date_create: string;
    date_form: string;
    date_close: string;
    status_task: string;
    status_mission: string;
    employee: {
        id: number;
        full_name: string;
        post: string;
        name_organization: string;
        address: string| null;
        id_user: number;
    };
    moderator: {
        id: number;
        full_name: string;
        post: string;
        name_organization: string;
        address: string;
        id_user: number;
    };
    transport: {
        id: number;
        name: string;
        type: string;
        describe: string | null;
        photo: string | null;
    };
    location: {
        id: number;
        sequence_number: number;
        id_geographical_object: number;
        id_mars_station: number;
    }[];
    geographical_object: {
        id: number;
        feature: string;
        type: string;
        size: number;
        describe: string| null;
        photo: string| null;
        status: boolean;
    }[];
};


const initialState: MarsStation = {
    id: -1,
    type_status: "",
    date_create: "",
    date_form: "",
    date_close: "",
    status_task: "",
    status_mission: "",
    employee: {},
    moderator: {},
    transport: {},
    location: [],
    geographical_object: [],
};

const MarsStationDraft = createSlice({
    name: "mars_station_draft",
    initialState: initialState,
    reducers: { 
        updateMarsStationDraft: (state, action) => {
            return {
                ...state,
                ...action.payload,
                employee: { ...state.employee, ...action.payload.employee },
                moderator: { ...state.moderator, ...action.payload.moderator },
                transport: { ...state.transport, ...action.payload.transport },
                // и так далее для других вложенных объектов
            };
        },
        cleanDraft: () => initialState,
    },
});

export const {
    updateMarsStationDraft,
    cleanDraft,
} = MarsStationDraft.actions;

export default MarsStationDraft.reducer;