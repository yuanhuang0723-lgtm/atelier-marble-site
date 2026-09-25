export type WorkshopVideo = {
  id: string;
  title: string;
  description: string;
  group: string;
  duration: string;
  src: string;
  poster: string;
};

const video = (index: number, title: string, description: string, group: string, duration: string): WorkshopVideo => {
  const id = String(index).padStart(2, "0");
  return {
    id,
    title,
    description,
    group,
    duration,
    src: `/videos/atelier-marble-workshop-clip-${id}.mp4`,
    poster: `/videos/posters/atelier-marble-workshop-clip-${id}.jpg`
  };
};

export const workshopVideos: WorkshopVideo[] = [
  video(1, "Custom stone basin detail", "A close view of a formed basin and adjoining stone surface.", "Basin & vanity details", "0:08"),
  video(2, "Vanity basin edge detail", "A short close-up of the basin edge and countertop transition.", "Basin & vanity details", "0:05"),
  video(3, "Stone units in the workshop", "Several stone components shown together in a workshop area.", "Workshop views", "0:05"),
  video(4, "Basin corner detail", "A close look at the corner profile of a custom stone basin.", "Basin & vanity details", "0:08"),
  video(5, "Workshop view with stone components", "A view across stone workpieces and work areas.", "Workshop views", "0:11"),
  video(6, "Handling a stone component", "A worker handles a stone piece during workshop activity.", "Workshop views", "0:14"),
  video(7, "Stone cutting in progress", "A cutting head moves across a dark stone workpiece; the machine model is not identified.", "Cutting & surface work", "0:13"),
  video(8, "Round dark stone component", "A close view of a round dark stone component and its surface.", "Cutting & surface work", "0:04"),
  video(9, "Double-basin vanity unit", "A double-basin stone vanity unit shown in the workshop.", "Basin & vanity details", "0:03"),
  video(10, "Stone workpiece handling", "Stone workpieces are moved and positioned in a workshop area.", "Workshop views", "0:04"),
  video(11, "Workshop review of a vanity top", "A worker looks over a stone vanity component in the workshop.", "Workshop views", "0:03"),
  video(12, "Dark stone panels", "Dark stone panels with curved outlines are shown together.", "Cutting & surface work", "0:02"),
  video(13, "Layout check on a stone surface", "A close view of a marked surface and a hand checking its layout.", "Cutting & surface work", "0:08"),
  video(14, "Integrated basin profile", "A close-up of a basin form cut into a stone vanity surface.", "Basin & vanity details", "0:06"),
  video(15, "Stone components in the workshop", "Stone components are staged on supports in a workshop area.", "Workshop views", "0:02"),
  video(16, "Double-basin stone units staged in the workshop", "Rows of rectangular double-basin stone units are shown in the workshop.", "Basin & vanity details", "0:16")
];

export const featuredWorkshopVideo = workshopVideos[6];
