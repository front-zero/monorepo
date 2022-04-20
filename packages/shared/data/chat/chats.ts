const chats = [
    {
        senderId: 1,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 1,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 1,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 1,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 1,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 1,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 2,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 2,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 2,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 2,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 2,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 2,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 3,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 3,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 3,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 3,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 3,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 3,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 4,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 4,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 4,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 4,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 4,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 4,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },
    {
        senderId: 4,
        receiverId: "me",
        message: "You are damn right.",
        sentAt: "2020-01-01T00:09:00.000Z",
    },

    {
        senderId: 5,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 5,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 5,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 5,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 5,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 5,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 6,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 6,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 6,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 6,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 6,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 6,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 7,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 7,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 7,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 7,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 7,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 7,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 8,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 8,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 8,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 8,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 8,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 8,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 9,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 9,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 9,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 9,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 9,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 9,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 10,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 10,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 10,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 10,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 10,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 10,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },

    {
        senderId: 11,
        receiverId: "me",
        message: "Hi, there?",
        sentAt: "2020-01-01T00:01:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 11,
        message: "Hi, What's up?",
        sentAt: "2020-01-01T00:02:00.000Z",
    },
    {
        senderId: 11,
        receiverId: "me",
        message: "I am doing well, how about you?",
        sentAt: "2020-01-01T00:03:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 11,
        message: "I am sick. I feel fever.",
        sentAt: "2020-01-01T00:04:00.000Z",
    },
    {
        senderId: 11,
        receiverId: "me",
        message: "Take rest.",
        sentAt: "2020-01-01T00:05:00.000Z",
    },
    {
        senderId: "me",
        receiverId: 11,
        message: "Ok, pray for me.",
        sentAt: "2020-01-01T00:06:00.000Z",
    },
];

export default chats;