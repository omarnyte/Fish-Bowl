export const createRoom = (displayName) => (
    $.ajax({
        method: 'POST',
        url: '/api/room',
        data: { displayName }
    })
);

export const getRoom = (slug) => (
    $.ajax({
        method: 'GET',
        url: `/api/room/${slug}`
    })
);

export const checkNameAvailability = (displayName) => (
    $.ajax({
        method: 'PATCH',
        // url: `/api/room/${slug}/name_available`,
        url: `/api/room/smmpc/name_available`,
        data: { displayName }
    })
);