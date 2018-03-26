export const createRoom = (displayName) => (
    $.ajax({
        method: 'POST',
        url: '/api/room',
        data: displayName
    })
);

export const getRoom = (slug) => (
    $.ajax({
        method: 'GET',
        url: `/api/room/${slug}`
    })
);