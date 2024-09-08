# VideoTube

## Introduction

VideoTube is a YouTube-inspired web application that I created using React, Redux Toolkit, Tailwind CSS, Node.js, Express.js, and MongoDB. This project not only replicates many of YouTube's core functionalities but also integrates Twitter-like tweet features. The application is organized into two main folders: `client` (frontend) and `server` (backend). Detailed documentation for this project can be found in the links below.

## Important Links

| Content            | Link                                                                        |
| ------------------ | --------------------------------------------------------------------------- |
| API Documentation  | [Click Here](https://documenter.getpostman.com/view/28570926/2s9YsNdVwW)    |
| Data Model         | [Click Here](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)          |

## Features

### User Management

- **User Registration, Login, Logout, Password Reset**
- **Profile Management:** Users can manage their avatars, cover images, and personal details.
- **Watch History Tracking:** Keeps track of the videos watched by users.

### Video Management

- **Video Uploading and Publishing:** Users can upload and publish videos.
- **Search, Sorting, and Pagination:** Advanced functionalities to search and organize videos.
- **Video Editing and Deletion**
- **Visibility Control:** Manage video visibility (publish/unpublish).

### Tweet Management

- **Tweet Creation and Publishing:** Users can create and publish tweets.
- **Viewing Tweets:** Users can view their own tweets.
- **Tweet Editing and Deletion**

### Subscription Management

- **Channel Subscriptions:** Subscribe to and view a list of subscribed channels.
- **Subscriber List:** View the list of your subscribers.

### Playlist Management

- **Playlist Creation, Update, and Deletion**
- **Manage Playlist Content:** Add or remove videos from playlists.
- **View User Playlists**

### Like Management

- **Like/Unlike Videos, Comments, and Tweets**
- **View Liked Content:** Users can view their liked videos.

### Comment Management

- **Commenting on Videos:** Add, update, and delete comments on videos.

### Dashboard

- **Channel Statistics:** View stats including views, subscribers, videos, and likes.
- **Uploaded Videos:** Access and manage all uploaded videos.

### Health Check

- **Backend Health Verification:** An endpoint to check the health of the backend.

## Technologies Used

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Media Storage:** Cloudinary (requires an account)

## Installation and Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Hruthik-28/youtube-twitter.git
    ```

2. **Install Dependencies**

    ```bash
    cd youtube-twitter
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root of the project and populate it with the necessary values using the `.env.sample` file as a guide.

4. **Start the Server**

    ```bash
    npm run dev
    ```

## Contributing

If you wish to contribute to this project, please feel free to submit your contributions.

## License

This project is licensed under [ChaiAurCode](https://www.youtube.com/@chaiaurcode).
