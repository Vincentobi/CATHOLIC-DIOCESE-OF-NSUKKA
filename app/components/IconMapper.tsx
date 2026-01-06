import React from 'react';
import {
    MdAccountBalance,
    MdSchool,
    MdLocalHospital,
    MdBalance,
    MdDiversity3,
    MdLocationOn,
    MdPerson,
    MdPhone,
    MdMail,
    MdEvent,
    MdGroup,
    MdMusicNote,
    MdAutoStories,
    MdGridView,
    MdSearch,
    MdMap,
    MdArrowDropDown,
    MdCalendarToday,
    MdCalendarMonth
} from 'react-icons/md';

interface IconMapperProps {
    iconName: string;
    className?: string;
    style?: React.CSSProperties;
}

const IconMapper: React.FC<IconMapperProps> = ({ iconName, className, style }) => {
    // Clean the icon name if it comes with the class prefix
    const cleanName = iconName.replace('material-symbols-outlined', '').trim();

    let IconComponent;

    switch (cleanName) {
        case 'account_balance':
            IconComponent = MdAccountBalance;
            break;
        case 'school':
            IconComponent = MdSchool;
            break;
        case 'local_hospital':
            IconComponent = MdLocalHospital;
            break;
        case 'balance':
            IconComponent = MdBalance; // For 'Social'
            break;
        case 'diversity_3':
            IconComponent = MdDiversity3;
            break;
        case 'location_on':
            IconComponent = MdLocationOn;
            break;
        case 'person':
            IconComponent = MdPerson;
            break;
        case 'phone':
            IconComponent = MdPhone;
            break;
        case 'mail':
            IconComponent = MdMail;
            break;
        case 'event':
            IconComponent = MdEvent;
            break;
        case 'group':
            IconComponent = MdGroup;
            break;
        case 'music_note':
            IconComponent = MdMusicNote;
            break;
        case 'auto_stories':
            IconComponent = MdAutoStories;
            break;
        case 'grid_view':
            IconComponent = MdGridView;
            break;
        case 'search':
            IconComponent = MdSearch;
            break;
        case 'map':
            IconComponent = MdMap;
            break;
        case 'drop_down_arrow':
            IconComponent = MdArrowDropDown;
            break;
        case 'calendar_today':
            IconComponent = MdCalendarToday;
            break;
        case 'calendar_month':
            IconComponent = MdCalendarMonth;
            break;
        default:
            return null;
    }

    return <IconComponent className={className} style={style} />;
};

export default IconMapper;