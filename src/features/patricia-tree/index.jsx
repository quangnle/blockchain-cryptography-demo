import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import * as p5 from 'p5';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';
import { PatriciaTree } from '@/utils/algorithms/patricia-tree';
const PatriciaTreeDemo = () => {
  const [node, setNode] = useState('');
  const canvasRef = useRef();
  const myP5Ref = useRef(null);
  const patriciaTree = useRef(null);
  const [nodes, setNodes] = useState([
    'A',
    'B',
    'BC',
    'BE',
    'BF',
    'BEF',
    'BEK',
    'ABCD',
    'ABCD1',
    'ABCD2',
    'ABCD3',
    'ABCD4',
    'ABCD5',
    'ABCD6',
    'ABCD7'
  ]);

  const onChange = e => {
    setNode(() => e.target.value);
  };

  const onPress = e => {
    if (e.keyCode === 13) {
      setNodes(prv => [...prv, node]);
    }
  };

  const addNode = leaf => {
    patriciaTree.current.addNode(leaf);
    setNode('');
  };

  const Sketch = p => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    const heightCanvas = windowHeight - 80 - 80; //header height, footer height
    console.log('width ==>', windowWidth);
    console.log('height ==>', windowHeight);

    p.setup = () => {
      p.createCanvas(windowWidth - 100, heightCanvas);
    };

    p.draw = () => {
      console.log('rerun draw of sketch fn');
      patriciaTree.current.draw();
    };
  };

  useEffect(() => {
    myP5Ref.current = new p5(Sketch, canvasRef.current);
    return () => {
      myP5Ref.current.remove();
    };
  }, []);

  useEffect(() => {
    return () => {
      myP5Ref.current.remove();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      myP5Ref.current = new p5(Sketch, canvasRef.current);
    };
  }, [nodes]);

  useEffect(() => {
    const { innerWidth: windowWidth } = window;

    patriciaTree.current = new PatriciaTree(
      -50,
      50,
      windowWidth - 100,
      myP5Ref.current
    );
    for (const leaf of nodes) addNode(leaf);
  }, [nodes]);

  // console.log(patriciaTree.current);

  return (
    <Box
      width="100%"
      height="calc(100vh - 80px - 80px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      bgcolor="burlywood"
      mb={1}
      p={2}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            required
            id="node"
            name="node"
            label="Enter new node here"
            fullWidth
            value={node}
            onChange={onChange}
            onKeyDown={onPress}
            variant="outlined"
          />
          <Button
            style={{ marginTop: 8 }}
            disabled={!node || node.length > 6}
            onClick={addNode}
            variant="contained"
            endIcon={<AddLinkRoundedIcon />}
            color="secondary"
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Box ref={canvasRef} display="flex" justifyContent="center"></Box>
    </Box>
  );
};

export default PatriciaTreeDemo;
