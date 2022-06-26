import { AuthUser } from './authUser.interface';
import { Specialty } from './specialty.class';

export interface Beautier {
    id: number;
    auth_user: AuthUser;
    calendar_id: string;
    specialties: Specialty[];
    bio: string;
    photo_url: string;
    title: string;
    preferred_name: string;
}
