

const produtos =[
    {
        id: 1,
        nome: "X-Burguer Clássico",
        categoria: "Hambúrgueres",
        descricao: "Pão com brioche, hambúguer 180g, queijo cheddar, alface, tomate e molho especial",
        preco: 18.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer1.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjEuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM0MjQsImV4cCI6MTk3OTY2OTQyNH0.x9wXcrLVEKd60MKpkDtPt0jYtAS8DZQHQ5NEqIDRfdlhyAPeEEYzIt31sXc254j6gLLQzqpCMx2KPGjNgXgRVg"
    },
    {
        id: 2,
        nome: "X-Bacon Supremo",
        categoria: "Hambúrgueres",
        descricao: "Pão brioche, hambúrguer 180g, queijo cheddar, bacon crocante, alface, tomate e molho especial.",
        preco: 22.20,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer2.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjIuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM0NjYsImV4cCI6MTg4NTA2MTQ2Nn0.QSJjWhp41MNvbEfCOIiJPWh6-Zu1LqSl-M1YLv9713flW5ejwzRNotQ8JIDIkxmXMwNFJpk9WY-r_sdxK062Zg"
    },
    {
        id: 3,
        nome: "X-Cheddar Cremoso",
        categoria: "Hambúrgueres",
        descricao: "Pão brioche, 2 hambúrgueres 180g, queijo cheddar, bacon, presunto, alface, tomate e molho especial",
        preco: 29.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer3.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjMuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM0OTEsImV4cCI6MTg4NTA2MTQ5MX0.dfY7i5eZ7awVxZGDr_39BoGc254H2qnJ9C6-iptiBWOZzw130IuBeyYM8HKc1hjnstbK9z3LuBSu0rfck2S4BA"
    },
    {
        id: 4,
        nome: "X-Frango Crocante",
        categoria: "Hambúrgueres",
        descricao: "Pão brioche, filé de frango grelhado, queijo cheddar, alface, tomate e molho especial",
        preco: 17.90, 
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer4.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjQuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM1MjYsImV4cCI6MTk3OTY2OTUyNn0.JdewcKcHKa19Rc4f5x2IVjxBCzfcVoRQEKNGKFFlWudQ2e7SkZW_4E0aMo-K0W2vqRmXTXwYkzaVnUEazSEJTg"
    },
    {
        id: 5,
        nome: "X-Calabresa Especial",
        categoria: "Hambúrgueres",
        descricao: "Pão brioche, calabresa fatiada, tomate, queijo cheddar, alface e molho especial",
        preco: 19.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer5.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjUuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM1NjEsImV4cCI6MTk3OTY2OTU2MX0.lUPBtMdKh-H7kker7p5sTHelHBb4a3oaJ0m0NfCKDtwC-DZw1woyB8fBY5cBSFRURfieUkmcnMJeNuDadksvxQ"
    },
    {
        id: 6,
        nome: "Duplo Smash",
        categoria: "Hambúrgueres",
        descricao: "Hambúrguer 180g, queijo, picles, cebola, molho",
        preco: 23.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer6.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjYuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM1ODksImV4cCI6MTk3OTY2OTU4OX0.90YlZLgFVLGOLFbkLkZA9ishdkwjCnLkpafrNg3be3NO8k1oplNwHLBvUuaTYNxIkPEEWgo4rYCDhhOYdLhu_g"
    },
    {
        id: 7,
        nome: "X-Barbecue Crispy",
        categoria: "Hambúrgueres",
        descricao: "Cebola crispy, hambúrguer 180g, molho especial, queijo e bacon.",
        preco: 25.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer7.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjcuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM2MjQsImV4cCI6MTk3OTY2OTYyNH0.jaW4oohfrg2_NIkYqM2XEQ1SzjRE0Tr2BpYxgtB4tcobDKuOZXWOjegxkgprZE5tU6UTWNaBxPvOY76Gl-pTEg"
    },
    {
        id: 8,
        nome: "X-Salada Fresh",
        categoria: "Hambúrgueres",
        descricao: "Pão Brioche, hambúrguer 180g, queijo cheddar, alface, tomate, cebola e molho especial",
        preco: 20.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer8.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjguanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM2NTcsImV4cCI6MTk3OTY2OTY1N30.4WuT7N1V34e9QhIyMqN08tsEM7clGm5p5RMEGW3Z9JGmmwIZmVaq5ALPJCCZbJv6CdQBeJFwZ4oZ0hVC-gplyg"
    },
    {
        id: 9,
        nome: "Brasa Especial",
        categoria: "Hambúrgueres",
        descricao: "180g de carne suculenta, queijo prato maçaricado,  pepperoni, geleia de cebola roxa caramelizada, macadâmia e tomate.",
        preco: 37.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/hamburguer9.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvaGFtYnVyZ3VlcjkuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NTM2ODgsImV4cCI6MTk3OTY2OTY4OH0.BH3M9ISkMvcNeGwg5gyECWoh38-0waDEN1btLWm_H1yY1kaCjKle8l_CzpTgJYRJJzi-ldHw3ynsAVdb3oB2xA"
    },
    {
        id: 10,
        nome: "Batata frita crocante",
        categoria: "Porções",
        descricao: "Porção simples de 200g",
        preco: 16.90,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao1.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvMS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ1MzczMiwiZXhwIjoxOTc5NjY5NzMyfQ.sUZmYOcZqS96fe0wfWVZ029W7V82uGeJy-sm6x7txXVKBESI7HDnbWXqThBrVzmWls2lWEqVPx8W2G1origbGg"
    },
    {
        id: 11,
        nome: "Batata cheddar & Bacon",
        categoria: "Porções",
        descricao: "Bata frita + creme de cheddar + pedaços de bacon, porção 350g",
        preco: 24.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao2.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvMi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjI4NSwiZXhwIjoxOTc5Njg4Mjg1fQ.f1Qdw1vlBjCX9_7oFoWB5esHODisu6jRnhVwQdXcAWAjLilmJdapfGU7wc_J50iXYfuxgbtFHcccjqgc0rfMkw"
    },
    {
        id: 12,
        nome: "Aneis de cebola dourados",
        categoria: "Porções",
        descricao: "Porção 400g",
        preco: 12.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao3.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvMy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjMyNSwiZXhwIjoxOTc5Njg4MzI1fQ.9GF9j0rvouQWG7exdWYs2IPxp4wXbka1D9UKd0NhfJQcP8eSQ3ZODcvksqAZ7IMhjbIkaurdAF7ld4evMEsp1A"
    },
    {
        id: 13,
        nome: "Frango a passarinho",
        categoria: "Porções",
        descricao: "Porção 450g",
        preco: 30.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao4.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvNC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjM2MiwiZXhwIjoxOTc5Njg4MzYyfQ.7m3OVftINQCFrOsU0kA8At9zO3G6Vf06iXclxyaElmw72wRinDuBzfjILID9Zxwbg5z0Xp4dlYZJmYPj0C039Q"
    },
    {
        id: 14,
        nome: "Mandioca com queijo",
        categoria: "Porções",
        descricao: "Porção 400g",
        preco: 25.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao5.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvNS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjY1MCwiZXhwIjoxOTc5Njg4NjUwfQ.IoF_zvuqIfL_6QZX4kabwal-MsQplaDNIR2Fg3zL-9a2qRiaqbq6aL7qvDnNcPlF-EjfIBXv_ZG9oSlsKV1ErQ"
    },
    {
        id: 15,
        nome: "Calabresa Acebolada",
        categoria: "Porções",
        descricao: "Porção simples: calabresa + cebola",
        preco: 27.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao6.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvNi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjY3NywiZXhwIjoxOTc5Njg4Njc3fQ.oiR0D7J5NJZeQfvVvyAWDO1yO4LUD0vCX8Zcy7ebGoCeJm6Ii_wZo-iYfpviw29X8gKFdp1mjE2AS1zCNc4kDA"
    },
    {
        id: 16,
        nome: "Nuggets Crocantes",
        categoria: "Porções",
        descricao: "Nuggets + molho barbecue",
        preco: 26.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao7.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvNy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjcxMywiZXhwIjoxOTc5Njg4NzEzfQ.Gp592mDBZeltB9j1g_Me7YTWo4eaHMwxIeM-8g39OhzUxIwXiA553i_jTi2_9oD6LtvqaYPUYg9yj4zVm4jDeg"
    },
    {
        id: 17,
        nome: "Porção Brasa mix",
        categoria: "Porções",
        descricao: "Batata + calabresa",
        preco: 27.00, 
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao8.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvOC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3Mjc0MiwiZXhwIjoxOTc5Njg4NzQyfQ.cnFBfcSrZo-J-kGR1G0SBj3vAlvboLnciCnUH98bpFU2iYSd1IbllGpfN7U8IlpvC8_teRZTk0UyExLU3Uu8uQ"
    },
    {
        id: 18,
        nome: "Batata especial da casa",
        categoria: "Porções",
        descricao: "Batata + queijo + bacon + molho da casa",
        preco: 28.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/porcao9.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvcG9yY2FvOS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3Mjc4MCwiZXhwIjoxOTc5Njg4NzgwfQ.tcZm6du-krWzN281GCKiWSNReflslfyrmx-NhYxKgnGnLTQy52XdGtFs79Z1I3JkPBZzX004ZYRcXzn_PRK-QA"
    },
    {
        id: 19,
        nome: "Coca-cola gelada",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 4.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida1.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhMS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MjgyMiwiZXhwIjoxOTc5Njg4ODIyfQ.Ri6sYW4ylh55C-rzn9yM8hb3eRue3-oC2d9YvVu8e8-UH2f6lE7ee5SZFGJcqo0CEzKKHmRYudgCdghy4VGb4Q"
    },
    {
        id: 20,
        nome: "Guaraná Refrigerante",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 4.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida2.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhMi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3Mjg5NCwiZXhwIjoxOTc5Njg4ODk0fQ.pUqDegLLNh9_zAg3T6VsLuapsCrHNqIaxGNU5_XHSAzgnB2HZE5XQ6Ce9k5Dsx_2TSXsFviilpXeqYxQlPD8Ug"
    },
    {
        id: 21,
        nome: "Limonada Suiça",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 6.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida3.png?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhMy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDcyOTQ4LCJleHAiOjE5Nzk2ODg5NDh9.LVZeS2DLg_1HrnNB7HfJb-j5WWPnaI5tGScP0gEkZK3cP0R-YHIwrmKPC6r9giGM6mvl67niXgfPTETj5z21Ow"
    },
    {
        id: 22,
        nome: "Suco de morango",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 6.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida4.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhNC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3Mjk4NCwiZXhwIjoxOTc5Njg4OTg0fQ.1JSp3GO2c-4tuOwijJOk7smEsrthtoyr_LnQn4-EhgjzBKiU3AbYU3JelHgu4fvm41doBCeMQc4j2IJlG-Nt0Q"
    },
    {
        id: 23,
        nome: "Suco de Laranja",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 5.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida5.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhNS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MzgwMSwiZXhwIjoxOTc5Njg5ODAxfQ.tl4NYuK0AF38Y0DVchyTVXy-vEr3i7aznpXUG70hVQ41TRJhp2X-L3IluOOR3Md5JdCjxMvJ6kUwGqHwp05o3g"
    },
    {
        id: 24,
        nome: "Suco de maracujá",
        categoria: "Bebidas",
        descricao: "300ml",
        preco: 6.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida6.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhNi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3MzgzMiwiZXhwIjoxOTc5Njg5ODMyfQ.Mnne7lOb49Sfn4U1Bd425sC9OGRTMtEvxVhZS2iSrDa-Wls7ifdmmIaCLrVSj468EIMWKdVPVGqxWL_KsPeD8A"
    },
    {
        id: 25,
        nome: "Milk shake chocolate",
        categoria: "Bebidas",
        descricao: "400ml",
        preco: 12.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida7.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhNy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3Mzg2MywiZXhwIjoxOTc5Njg5ODYzfQ.JGwSbYBjemL1G7Nvup3vauDOsHHuGc0MdEiV7aCY7tXDeuCqPfgbwQU5P3L44KjCoXQX0y_yzIAhNqzcklVAzw"
    },
    {
        id: 26,
        nome: "Milk shake morango",
        categoria: "Bebidas",
        descricao: "400ml",
        preco: 12.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida8.png?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhOC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDczODkxLCJleHAiOjE5Nzk2ODk4OTF9.vjmyg3f9wRWr5nuOnrXE9b9YEzmstBh3MkQgAVVNFB2IdIAywAOb4TQvgK_RZYYzdGG88Iwn9-Fyb3Bf17OXQg"
    },
    {
        id: 27,
        nome: "Refrigerante lata",
        categoria: "Bebidas",
        descricao: "350ml",
        preco: 6.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/bebida9.png?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvYmViaWRhOS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkxMDU2MTk3LCJleHAiOjE5ODAyNzIxOTd9.BF6TYmCEf_twqX2zb4nRCDrEE44JlBkCltnoKyYyoAVl9Xb_9VqU1fpNtAgFiZ85S8-B3xJ5t6rMYIs3yn-MuQ"
    },
    {
        id: 28,
        nome: "Brownie com Nutella",
        categoria: "Sobremesas",
        descricao: "Brownie + sorvete",
        preco: 12.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa1.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhMS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDAyMSwiZXhwIjoxOTc5NjkwMDIxfQ.YHjaMRqo_7t6B8rgGcCWo0YAkbDHeQm-fOCjHNeHiO0jP9O-J5zp6apoBYp8lTafBRbOrGh8yLpotvwezUcrXg"
    },
    {
        id: 29,
        nome: "Morango na taça",
        categoria: "Sobremesas",
        descricao: "Morango na taça + creme especial",
        preco: 14.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa2.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhMi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDA1NCwiZXhwIjoxOTc5NjkwMDU0fQ.J5JkWTAiuSQPMHYuS7uK4c7ePcEmWtUMOM4jfJ4aLZKJm0cm5Yf06Bfi-t__5d7-zVNnJsYbHtU2dpVYoaxahA"
    },
    {
        id: 30,
        nome: "Sorvete especial da casa",
        categoria: "Sobremesas",
        descricao: "Sorvete de creme, flocos e cobertura de chocolate",
        preco: 12.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa3.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhMy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDA4NCwiZXhwIjoxOTc5NjkwMDg0fQ.87Pix9FMJcYILCuwyA1GHrT-qImnWiBQgwaubfHwsrrT4mjUeIk9jS2EQ7NDNfbDCJ4gjLpZFcRt6bNxEHvBnQ"
    },
    {
        id: 31,
        nome: "Petit Gateau de chocolate",
        categoria: "Sobremesas",
        descricao: "Petit Gateau de chocolate + sorvete",
        preco: 18.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa4.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhNC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDEyMCwiZXhwIjoxOTc5NjkwMTIwfQ.rYX4fB5X9ZylYGB_R21glKkMD88xUWAAnaGzildbHkzGZOS63mBV1Qh7BDs1dqX96jpfMaM4HuoMWuT0kUD0iQ"
    },
    {
        id: 32,
        nome: "Sorvete de Oreo",
        categoria: "Sobremesas",
        descricao: "300ml",
        preco: 10.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa5.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhNS5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDE1NiwiZXhwIjoxOTc5NjkwMTU2fQ.YNyq9v-W1dkhzAQx-MfdNIwpa9-xF-Te65ZCcLec_ySoqcyyHCrYjQfHYnLyuFtxCAwUdTHdJAaIvc_aNR1SIg"
    },
    {
        id: 33,
        nome: "Cookie Recheado",
        categoria: "Sobremesas",
        descricao: "Porção de 200g",
        preco: 18.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa6.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhNi5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDE4MywiZXhwIjoxOTc5NjkwMTgzfQ.zA6BncCgoZV8VR2o1BUtOYquqW6MaImTg2XuremDfIwnuK8MU3Q0eucuDH4rHADd4zuLeVKoO8Uv4vytKswxuQ"
    },
    {
        id: 34,
        nome: "Copo da felicidade",
        categoria: "Sobremesas",
        descricao: "Mouse de chocolate + morango fatiado",
        preco: 14.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa7.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhNy5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDIxMSwiZXhwIjoxOTc5NjkwMjExfQ.aMrfgaIdT5C7IwWwRX4DAmpvm7o6v22RZeXLN_lBqH1vREV8OsLhL4LXKjFNg1ziEYpjS6ULivLe-FgQTF3Gsw"
    },
    {
        id: 35,
        nome: "Banana com chocolate",
        categoria: "Sobremesas",
        descricao: "350g",
        preco: 9.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa8.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhOC5qcGVnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ3NDI0NCwiZXhwIjoxOTc5NjkwMjQ0fQ.aYM7uRRIWTjY3bX0SQgP3TAT0Y2M-wLYgldcXSEgf9U3c9_TrL-s1yZdrn9v-s_D2UrEDXhZlK18I3ATgxFMCw"
    },
    {
        id: 36,
        nome: "Waffe com nutella e morango",
        categoria: "Sobremesas",
        descricao: "Porção 350g",
        preco: 13.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/sobremesa9%20(1).jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvc29icmVtZXNhOSAoMSkuanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NzQyODgsImV4cCI6MTk3OTY5MDI4OH0.-o-hs4R3d7Wvu8iojNPzOrB0scs7Y3AjvLKbu2uZ2jIGS04X21Fa1YtTMO02Hz9Iy2FhCft4VvWXhtcnIXM2Lw"
    },
    {
        id: 37,
        nome: "Combo clássico",
        categoria: "Combos",
        descricao: "Hamburguer + batata frita + Refrigerante 300ml",
        preco: 35.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo1.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm8xLmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDc0MzMwLCJleHAiOjE5Nzk2OTAzMzB9.f1gzCdjYDzHC3ZFxUAmAHwrrbZldtmROPNgDL4YMbZLutopDQxQpg61t3M0qExoJUPOLro5Yk5ee6P86s_n8SA"
    },
    {
        id: 38,
        nome: "Combo bacon supremo",
        categoria: "Combos",
        descricao: "X-Bacon supremo + Batata + Refrigerante",
        preco: 38.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo2.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm8yLmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDc0NDg4LCJleHAiOjE5Nzk2OTA0ODh9.Ruu3btFRCLgiiUHQffqXKmcXYOUlMLijXfzz7E8HPSoO7qZBoJ9d5E0tryTDtHnSOuR7_Xb_QHoz0UAbiegl7w"
    },
    {
        id: 39,
        nome: "Combo duplo brasa",
        categoria: "Combos",
        descricao: "Duplo smash + batata frita + refrigerante 350ml",
        preco: 38.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo3.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm8zLmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDc0NTIxLCJleHAiOjE5Nzk2OTA1MjF9.xzlSmkX0HutykqqCU1Bb1Bpw2VTxg16cjVep7TfGMTiDflpOKYLXfnQAritarHmeG_OmQ_OheUuV3Us36I_J1A"
    },
    {
        id: 40,
        nome: "combo cheddar especial",
        categoria: "Combos",
        descricao: "X-cheddar cremoso + batata frita + aneis de cebola + milkshake chocolate",
        preco: 45.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo4.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm80LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDc0NTQ1LCJleHAiOjE5Nzk2OTA1NDV9.dPwFYUu1qOr7xBccXrRgut4GA-HM3UBMcYuN3B9wiBq5HhWjk2O6ePFHYPRVvtDVAE80yiOG3xybUG57BfSH2Q"
    },
    {
        id: 41,
        nome: "Combo casal",
        categoria: "Combos",
        descricao: "2 hamburgueres classico + 2 refrigerantes latas",
        preco: 50.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo8.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm84LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkxMDU1NzgxLCJleHAiOjE5ODAyNzE3ODF9.FN4iyX3_O40Xt9PJJ9laHWLxnLl2aARCgpgP25ck5JI7JGYmE-b8zWcMyt7hginsKny_pz6ZHMvoyFFkkN67tA"
    },
    {
        id: 42,
        nome: "Combo família",
        categoria: "Combos",
        descricao: "4 hambúrgueres clássico + 4 refrigerantes latas + porção de batata",
        preco: 88.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo6.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm82LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkxMDU1OTE3LCJleHAiOjE5ODAyNzE5MTd9.MYCCLKMjXQs11wRluNxonfgmv9blbfRs2it4tavwRMDfpsZRROBjN7q0wQeIMnG0kbiWev9Nvay9gTFVeKoqLA"
    },
    {
        id: 43,
        nome: "Combo calabresa",
        categoria: "Combos",
        descricao: "X-calabresa + batata + suco de maracujá 300ml",
        preco: 38.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo7.jpeg?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm83LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNDc1MDMzLCJleHAiOjE5Nzk2OTEwMzN9.VkDp9coISr_8uvxKPoeCo35JkrAnA0135tQfJ7wcbcCwbC_oCL9oawjfiDouoJwiaBQmDyjnnOraCuQbjjKROg"
    },    
    {
        id: 44,
        nome: "Combo sabor de casa",
        categoria: "Combos",
        descricao: "X-Bacon supremo + batata especial da casa + milkshake morango",
        preco: 38.00,
        image: "https://emsjqthdolaudvsxbpmr.supabase.co/storage/v1/object/sign/Images/combo9.png?token=eyJraWQiOiI1ZmMzNjZhOS1hZTMyLTQ1NjktYjA2MS03MmRhZGU5MGZmNmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJJbWFnZXMvY29tYm85LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTA0NzUwNTgsImV4cCI6MTk3OTY5MTA1OH0.UZkr6RTAbMrjw5xxhY1dW1SIOK4RzbJdu-21Z52Jt-26_UNFfjaTpWEotEE8grb9GyCf75li2xBCh-s3tbe7UQ"
    }
]

export default produtos