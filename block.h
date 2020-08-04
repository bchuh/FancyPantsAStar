#ifndef BLOCK_H
#define BLOCK_H

#include <QGraphicsRectItem>
#include <QGraphicsPixmapItem>
#include "my_scene.h"

const int F_WIDTH=20;  //field width ,the amount of units
const int F_HEIGHT=20; //field height ,the amount of units
const int G_UNIT=70; //grid unit

enum Color{
    BLANK,YELLOW,GREEN,BLUE,GRAY,RED
};

class my_scene;


class Block : public QGraphicsRectItem
{

private:
    int m_isWall; //0: false, 1:true
    int m_type; //0:blank, 1:starter point, 2:end point
    Color m_color;
    int m_width;
    int m_row;
    int m_colomun;
    my_scene*m_parent;
    QGraphicsPixmapItem*m_child;
    Block* m_lastNode;
    int m_fCost;


public:
    Block(my_scene*parent,int unitWidth);//The width of a single block
                        //must match its position while creating instance
    void setColor(Color color);
    void setCol(int col);
    void setRow(int row);
    int col();
    int row();
    void checkIconState();
    Block* lastNode();
    void setLastNode(Block* lastNode);

    void setFCost(int fcost);
    int FCost()const;
    bool wallState();

    // QGraphicsItem interface
public:
    void paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget);



    // QGraphicsItem interface
protected:
    void mousePressEvent(QGraphicsSceneMouseEvent *event);
};

#endif // BLOCK_H
