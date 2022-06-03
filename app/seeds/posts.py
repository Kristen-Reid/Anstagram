from app.models import db, Post


def seed_posts():
    post1 = Post(
        media_url='https://wallpaperaccess.com/full/5707282.jpg', summary='Love Tokyo Ghoul! Ken Kaneki is my favorite character!!', user_id=2
        )
    post2 = Post(
        media_url='https://i.pinimg.com/originals/04/c3/7a/04c37aaa4fc48abc09ddb7fab1220a1b.png', summary='One of my favorite charaters from who did not get enough air time. Nelliel is such a boss!', user_id=4
        )
    post3 = Post(
        media_url='https://i.pinimg.com/originals/29/63/8a/29638abfcef4f4217dcc615604a44d91.jpg', summary='So hype for the return of Bleach!', user_id=1
        )
    post4 = Post(
        media_url='https://64.media.tumblr.com/3d1e05d69677a1d1c2fec9103267c915/c5e3bd4614e47275-71/s1280x1920/330eba4b6f2c9dca6a30c11e2640785a95b8d6c9.jpg', summary='This episode was soooo good!! 🔥', user_id=1
        )
    post5 = Post(
        media_url='https://blacknerdproblems.com/wp-content/uploads/2018/08/attack-on-titan-season-3-levi-ackerman-kick-ass.jpg', summary='Levi definitely the GOAT on AOT! 🐐', user_id=1
        )
    post6 = Post(
        media_url='https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/01/Samurai-Champloo.jpg', summary='A classic with an amazing soundtrack. Samurai Champloo will always be great to me.', user_id=3
        )
    post7= Post(
        media_url='https://www.1zoom.me/big2/31/122766-aleni.jpg', summary='Some fanart for ya', user_id=1
    )
    post8= Post(
        media_url='https://i0.wp.com/images2.alphacoders.com/459/459838.jpg', summary='Show a hilarious and great show! Watched it twice lol', user_id=4
    )
    post9 = Post(
        media_url='https://cdn-japantimes.com/wp-content/uploads/2019/12/p12-schley-akiraart-b-20191206.jpg', summary='This movie started my love for anime when I was a kid. Classic and still so good 🔥', user_id=3
    )
    post10 = Post(
        media_url='https://cdn.vox-cdn.com/thumbor/SYiIF-623aJEsMLH5ceEnGWWQXw=/0x0:1280x1205/1200x800/filters:focal(514x213:718x417)/cdn.vox-cdn.com/uploads/chorus_image/image/64060202/tumblr_nzss2qZIyT1suxi1yo1_1280.0.jpg', summary='Jason thanks for the recommendation!', user_id=4
    )
    post11 = Post(
        media_url='https://i.ytimg.com/vi/vNKy-TD1jYI/maxresdefault.jpg', summary='This show was super wild LOL can\'t believe this show was on a kids network 🤣', user_id=5
    )
    post12 = Post(
        media_url='https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/05/FEATURED-IMAGE-my-hero-academia.jpg', summary='Planning on binging this soon! A good friend of mine suggested I watch it 😁', user_id=6
    )
    post13 = Post(
        media_url='https://cdn.wallpapersafari.com/75/22/gQDn4l.jpg', summary='SQUAD', user_id=6
    )
    post14 = Post(
        media_url='https://booksandbao.com/wp-content/uploads/2021/05/jujutsu-kaisen-characters-1000x895.jpeg', summary='Heard the show and movie are fire!! Definitely plan on checking them out asap', user_id=2
    )
    post15 = Post(
        media_url='https://www.anime-planet.com/images/anime/screenshots/the-god-of-high-school-14602-1.jpg', summary='Worth the watch! 💥', user_id=4
    )
    post16 = Post(
        media_url='https://i.pinimg.com/originals/83/a5/75/83a575b032f4abfa1ad49e6b3a8c62c4.jpg', summary='🔥🔥🔥🔥🔥', user_id=5
    )
    post17 = Post(
        media_url='https://www.slashfilm.com/img/gallery/demon-slayer-season-2-finale-a-hopeful-heartbreaking-masterpiece/l-intro-1644900696.jpg', summary='So excited for season 3!! 😭🙌🏾', user_id=1
    )
    post18 = Post(
        media_url='https://www.thedigitalfix.com/wp-content/uploads/2021/10/netflix-cowboy-bebop-anime.jpg', summary='Could watch this show and listen to the soundtrack on repeat. We won\'t talk about awful live action though LOL', user_id=1
    )
    post19 = Post(
        media_url='https://variety.com/wp-content/uploads/2022/03/Dragon-Ball-Z.jpg', summary='The squad I grew up with...', user_id=3
    )
    post20 = Post(
        media_url='https://animeanime.global/wp-content/uploads/2021/10/438735-1.jpg', summary='Will always love this show! It deserved a better ending though...', user_id=6
    )
    post21 = Post(
        media_url='https://i.pinimg.com/originals/c2/f0/0f/c2f00ff73646d344db779803f669d60b.jpg', summary='Sometimes I liked this show and sometimes it got on my nerves lol they definitely didn\'t need a spinoff lol.', user_id=2
    )
    post22 = Post(
        media_url='https://i.ytimg.com/vi/Ijt145xD1TY/maxresdefault.jpg', summary='#fireforce', user_id=5
    )


    db.session.add_all([post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13, post14, post15, post16, post17, post18, post19, post20, post21, post22])

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
