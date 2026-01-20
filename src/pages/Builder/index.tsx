import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useCityStore } from "@/stores/cityStore";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  background-color: #f5f5f5;
  color: #333;
`;

const Form = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FileInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px dashed #ddd;
  border-radius: 6px;
  background: #fafafa;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  margin-bottom: 20px;
  font-size: 14px;
`;

export default function Builder() {
  const navigate = useNavigate();
  const addCity = useCityStore((state) => state.addCity);

  const [name, setName] = useState("");
  const [geoJson, setGeoJson] = useState<any>(null);
  const [mapTexture, setMapTexture] = useState<string>("");
  const [normalMapTexture, setNormalMapTexture] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGeoJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        // Basic validation
        if (!json.type || (json.type !== "FeatureCollection" && json.type !== "Feature")) {
          throw new Error("Invalid GeoJSON format");
        }
        setGeoJson(json);
        setError("");
      } catch (err) {
        setError("Invalid GeoJSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setError("Image too large. Please use images under 2MB for browser storage.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setter(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!name || !geoJson || !mapTexture || !normalMapTexture) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate async operation
    setTimeout(() => {
      const id = crypto.randomUUID();
      // Extract city names from GeoJSON for stats stub
      const stats: Record<string, any> = {};
      const features = geoJson.features || (geoJson.type === "Feature" ? [geoJson] : []);

      features.forEach((f: any) => {
        if (f.properties?.name) {
          stats[f.properties.name] = {
            population: Math.floor(Math.random() * 1000000), // Random stub data
          };
        }
      });

      addCity({
        id,
        name,
        geoJson,
        mapTextureUrl: mapTexture,
        normalMapTextureUrl: normalMapTexture,
        stats,
      });

      setLoading(false);
      navigate("/dashboard");
    }, 500);
  };

  return (
    <Wrapper>
      <Form>
        <Title>Create New Map</Title>

        {error && <ErrorMsg>{error}</ErrorMsg>}

        <Field>
          <Label>City Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. My Custom City"
          />
        </Field>

        <Field>
          <Label>GeoJSON File (.json)</Label>
          <FileInput
            type="file"
            accept=".json,.geojson"
            onChange={handleGeoJsonUpload}
          />
        </Field>

        <Field>
          <Label>Map Texture (.png, .jpg)</Label>
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setMapTexture)}
          />
        </Field>

        <Field>
          <Label>Normal Map Texture (.png, .jpg)</Label>
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setNormalMapTexture)}
          />
        </Field>

        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Create Map"}
        </Button>
      </Form>
    </Wrapper>
  );
}
