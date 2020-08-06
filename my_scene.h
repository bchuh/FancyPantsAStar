#ifndef MY_SCENE_H
#define MY_SCENE_H
#include <QGraphicsScene>
#include <vector>
#include "block.h"

class Block;

class my_scene :public QGraphicsScene
{
private:
    Block*m_startB; //starting block
    Block*m_finishB; //finishing block
    std::vector<std::vector<Block*>  > m_grid;
    QVector<Block*> m_pathNodes;




public:
    bool PathfindState;
    my_scene(QObject*parent=0);
    int checkFlag();
    void setStartB(Block*starter); //setter
    void setFinishB(Block*end);     //~
    Block* startB();        //getter
    Block* finishB();       //~
    bool findPath(int sX,int sY, int fX, int fY);
    int calCost(int x1, int y1, int x2, int y2);
    void calPath(int fx, int fy);
    void drawPath();
    void findPathEvent();
    bool isNew;
    int G_UNIT;
    // QGraphicsScene interface
protected:
    void mousePressEvent(QGraphicsSceneMouseEvent *event);
};

#endif // MY_SCENE_H
