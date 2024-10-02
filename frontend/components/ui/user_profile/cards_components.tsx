import { Card, Text, Image, Group, Divider } from '@mantine/core';

interface SongCardProps {
    title: string;
    artist: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, artist }) => {
    return (
        <div>
            <Card shadow="sm" padding="lg" className="flex flex-row">
                <Group gap="xs">
                    <Image
                        radius="md"
                        h={60}
                        w={60}
                        src="/assets/images/myspotifytaste.png"
                    >
                    </Image>
                    <Group gap={2} className="flex flex-col items-start">
                        <Text
                            size="lg"
                            fw={600}>{title}</Text>

                        <Text
                            size="sm">{artist}</Text>
                    </Group>
                </Group>
            </Card>
            <Divider size="sm" w="95%" mx="auto" />
        </div>
    );
};

const songs = [
    { id: 1, name: 'AM 02:00', artist: 'Aimer' },
    { id: 2, name: 'AM 02:00', artist: 'Aimer' },
    { id: 3, name: 'AM 02:00', artist: 'Aimer' },
    { id: 4, name: 'AM 02:00', artist: 'Aimer' },
    { id: 5, name: 'AM 02:00', artist: 'Aimer' },
];

const artists = [
    { id: 1, name: 'Aimer' },
    { id: 2, name: 'Aimer' },
    { id: 3, name: 'Aimer' },
    { id: 4, name: 'Aimer' },
    { id: 5, name: 'Aimer' },
]

export { songs, artists };
export default SongCard;
