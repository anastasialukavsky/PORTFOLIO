import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const deletePost = await prisma.post.deleteMany({});
  const deleteAuth = await prisma.auth.deleteMany({});
  const deleteLink = await prisma.link.deleteMany({});
  const deleteProject = await prisma.project.deleteMany({});
  const deleteUser = await prisma.user.deleteMany({});

  
  await prisma.user.create({
    data: {
      firstName: 'Patty',
      lastName: 'B',
      bio: 'Just a wonderful fella',
      Auth: {
        create: { email: 'pattyb@gmail.com', password: 'thesock' },
      },
      Post: {
        create: {
          title: 'A post about how awesome I am, but I also like turtles',
          content:
            'Even though I have a weird opinion about olives I still am a likeble guy!',
          published: true,
        },
      },
      Project: {
        create: {
          title: 'Just my swesome project',
          description: 'Just some description of my awesome project',
          imageUrl: 'dsjfnsjf',
          date: new Date(),
          ghLink: 'dfdsfsd',
          deployedLink: 'fnsdjkfns',
        },
      },
      Link: {
        create: {
          linkURL: 'fsdjfn',
          userLink: 'LINKEDIN',
        },
      },
    },
  });
  const allUsers = await prisma.user.findMany({
    include: {
      Auth: true,
      Post: true,
      Project: true,
      Link: true,
    },
  });

  console.dir(allUsers, { depth: 5 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
