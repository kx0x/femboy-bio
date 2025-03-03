# ✨ Femboy Profile Page

A beautiful, customizable profile page with a view counter, background music, and smooth animations. Perfect for personal websites and landing pages.

![chrome_YYQBARXnJP](https://github.com/user-attachments/assets/ebff558b-7877-43a8-b1c7-375cf4547930)


## 🌟 Features

- 💫 Smooth animations and transitions.
- 🎵 Background music with volume control.
- 👁️ View counter using Supabase.
- 🎨 Customizable profile card.
- 🎬 Video background.
- 🖼️ Custom effects for the profile picture.

## 🚀 Getting Started

### Requirements

- Node.js 16+
- npm or yarn
- Supabase account (for the view counter)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kx0x/femboy-bio
   cd femboy-bio
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up Supabase:
   - Create a new project on [Supabase](https://supabase.com)
   - Create a new table called `page_views` with the following SQL:
     ```sql
     create table page_views (
       id bigint primary key,
       count bigint default 0
     );
     
     -- Insert initial row
     insert into page_views (id, count) values (1, 0);
     ```

4. Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Add your custom content:
   - Replace `/public/profilePic.png` with your profile picture.
   - Replace `/public/angel_webp.webp` with your custom effect.
   - Replace `/public/music.mp3` with your background music.
   - Replace `/public/video.mp4` with your background video.

6. Run the development server:
   ```sh
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database by [Supabase](https://supabase.com)
- Fonts by [Google Fonts](https://fonts.google.com)

## 💖 Support

If you like this project, please give it a ⭐️!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

