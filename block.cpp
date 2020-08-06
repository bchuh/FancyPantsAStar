#include <QPainter>
#include <QBrush>
#include <QGraphicsSceneMouseEvent>
#include <QPixmap>
#include <QGraphicsPixmapItem>
#include <QToolTip>
#include <climits>
#include "block.h"
#include "mainwindow.h"



Block::Block(my_scene*parent,int unitWidth)
    :
    QGraphicsRectItem(-unitWidth*0.5,-unitWidth*0.5,unitWidth,unitWidth),
    m_isWall(0),
    m_type(0),
    m_color(Color::BLANK),
    m_parent(parent),
    m_child(nullptr),
    m_lastNode(nullptr),
    m_gCost(INT_MAX),
    ischecked(false)

{

  // setRect(0,0,unitWidth,unitWidth);
    G_UNIT=m_parent->G_UNIT;

}

void Block::setColor(Color color)
{
    m_color=color;
}

void Block::setCol(int col)
{
    if(col>=0&&col<F_HEIGHT){
        m_colomun=col;
    }
    return;
}

void Block::setRow(int row)
{
    if(row>=0&&row<F_HEIGHT){
        m_row=row;
    }
    return;
}

int Block::col()
{
    return m_colomun;
}

int Block::row()
{
    return m_row;
}

void Block::checkIconState()
{
    QPixmap image;

    switch(m_type){
        case 0:
            if(m_child!=nullptr){
                delete m_child;
                m_child=nullptr;
            }
            break;
        case 1:
            if(m_child!=nullptr){
                delete m_child;
            }
            m_child=new QGraphicsPixmapItem(this);
            image=QPixmap(":/new/—Pngtree—cartoon check symbol free illustration_4599313.png").scaled(G_UNIT,G_UNIT);

            m_child->setPixmap(image);
            m_child->setPos(-G_UNIT*0.5,-G_UNIT*0.5);

            m_parent->setStartB(this);
            break;
        case 2:
            if(m_child!=nullptr){
                delete m_child;
            }
            m_child=new QGraphicsPixmapItem(this);
            image=QPixmap(":/new/—Pngtree—flags and pennants_785825.png").scaled(G_UNIT,G_UNIT);

            m_child->setPixmap(image);
            m_child->setPos(-G_UNIT*0.5,-G_UNIT*0.5);
            m_parent->setFinishB(this);
             break;


    }
}

Block *Block::lastNode()
{
    return m_lastNode;
}

void Block::setLastNode(Block *lastNode)
{
    m_lastNode=lastNode;
}

QGraphicsPixmapItem *Block::child()
{
    return m_child;
}

void Block::setFCost(int fcost)
{
    m_fCost=fcost;
}

int Block::FCost()const
{
    return m_fCost;
}

void Block::setGCost(int gcost)
{
    m_gCost=gcost;
}

int Block::GCost() const
{
    return  m_gCost;
}

bool Block::wallState()
{
    return m_isWall;
}





void Block::paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget)
{
    QPen pen;
    QBrush brush;
    pen.setColor(Qt::black);


    switch(int i=int(m_color)){
        case Color::BLANK:
            brush.setStyle(Qt::NoBrush);
            break;
        case Color::BLUE:
            brush.setColor(Qt::blue);
            brush.setStyle(Qt::Dense4Pattern);
            break;
        case Color::YELLOW:
            brush.setColor(Qt::yellow);
            brush.setStyle(Qt::Dense4Pattern);
            break;
        case Color::GREEN:
            brush.setColor(Qt::green);
            brush.setStyle(Qt::Dense4Pattern);
            break;
        case Color::GRAY:
            brush.setColor(Qt::black);
            brush.setStyle(Qt::Dense4Pattern);
            break;
        case Color::RED:
            brush.setColor(Qt::red);
            brush.setStyle(Qt::FDiagPattern);
            break;
    }

    painter->setBrush(brush);

    painter->setPen(pen);
    painter->drawRect(boundingRect());

    Q_UNUSED(option);
    Q_UNUSED(widget);
}

void Block::mousePressEvent(QGraphicsSceneMouseEvent *event)
{
    if(event->button()&Qt::LeftButton){
        event->accept();
        if(m_isWall==1){
            return;
        }
        if(m_type!=0){
            switch(m_type){
                case 1 :
                    m_parent->setStartB(nullptr);
                    break;
                case 2 :
                    m_parent->setFinishB(nullptr);
                    break;
            }

            m_type=0;
        }else{
            m_type=m_parent->checkFlag();

        }
        checkIconState();

    }else if(event->button()&Qt::RightButton){
        event->accept();
        if(m_type!=0){
            return;
        }
        m_isWall++;
        m_isWall%=2;
        if(m_isWall==0){
            setColor(Color::BLANK);
        }else{
            setColor(Color::GRAY);

        }
        update();

    }else{
        event->ignore();
    }


}


