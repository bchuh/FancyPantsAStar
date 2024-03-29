#include <QGraphicsScene>
#include <vector>
#include <QVector>
#include <list>
#include <iostream>
#include <cmath>
#include <QPainter>
#include <QTime>
#include <QCoreApplication>
#include <QGraphicsTextItem>
#include <algorithm>


#include "my_scene.h"
#include "block.h"
#include "mainwindow.h"


struct Comparator{
    bool operator()(const Block *t1, const Block *t2)
    {
        if(t1->FCost()==t2->FCost())
            return t1->GCost()>t2->GCost();
        else
            return t1->FCost() < t2->FCost();
    }

};




my_scene::my_scene(QObject*parent)
    : QGraphicsScene(parent),
      m_startB(nullptr),
      m_finishB(nullptr),
      isNew(true)
{
    QDesktopWidget* desktopWidget = QApplication::desktop();
        //获取可用桌面大小
        QRect deskRect = desktopWidget->availableGeometry();
        int   m_nActScreenY = deskRect.height();
        G_UNIT=90/2160.0*m_nActScreenY;
  // QGraphicsScene*scene=new QGraphicsScene();

    for(int i=0; i<F_WIDTH; i++){
        std::vector<Block*> colBlocks;
        for(int j=0; j<F_HEIGHT; j++){
            Block*newBlock= new Block(this,G_UNIT);
            newBlock->setPos(i*G_UNIT+G_UNIT*0.5,j*G_UNIT+G_UNIT*0.5);
            newBlock->setCol(i);
            newBlock->setRow(j);
            addItem(newBlock);
            colBlocks.push_back(newBlock);
        }
        m_grid.push_back(colBlocks);
    }

update();

}

int my_scene::checkFlag()
{
    if(m_startB!=nullptr && m_finishB!=nullptr){
        return 0;
    }else if(m_startB==nullptr){
        return 1;
    }else if(m_finishB==nullptr){
        return  2;
    }

}

void my_scene::setStartB(Block *starter)
{
    m_startB=starter;
}

void my_scene::setFinishB(Block *end)
{
    m_finishB=end;
}

Block *my_scene::startB()
{
    return m_startB;
}

Block *my_scene::finishB()
{
    return m_finishB;
}

bool my_scene::findPath(int sX, int sY, int fX, int fY)
{
    using namespace  std;
    int gCost,hCost,fCost; //fCost=gCost+hCost;
    list<Block*> OpenList;
    list<Block*> ClosedList;
    gCost=0;
    hCost=calCost(sX,sY,fX,fY);
    if(method==1)
        hCost=0;
    fCost=gCost+hCost;
    if(method==2)
        gCost=fCost=0;
    Block*lastNode=nullptr;

    m_grid[sX][sY]->setFCost(fCost);
    m_grid[sX][sY]->setGCost(gCost);
    m_grid[sX][sY]->setLastNode(nullptr);
    QGraphicsTextItem*text= new QGraphicsTextItem(QString::number(fCost), m_grid[sX][sY]);
    QGraphicsTextItem*gtext= new QGraphicsTextItem(QString::number(gCost), m_grid[sX][sY]);
    text->adjustSize();
    gtext->setPos(m_grid[sX][sY]->rect().topLeft());
    gtext->adjustSize();

    OpenList.push_back(m_grid[sX][sY]) ;

    while(0==0){
        if(OpenList.empty()){
            std::cout<<"Failure: Open list is empty"<<std::endl;
            return false;
        }
        OpenList.sort(Comparator());

        Block*current=OpenList.front();
    //    current->setLastNode(lastNode);

        OpenList.pop_front();
        ClosedList.push_back(current);

        if(lastNode!=nullptr){
              lastNode->setColor(Color::GREEN);
        }
        current->setColor(Color::RED);
        update();
        QTime dieTime=QTime::currentTime().addMSecs(80);
        while(QTime::currentTime()<dieTime)
            QCoreApplication::processEvents(QEventLoop::AllEvents,80);

        //temp->set color red
        if(current==m_grid[fX][fY]){
            return true;
        }

        int gcost_estimated;
        for(int i=1; i<=8;i++){ //number 8 means the 8 neighbours of the current node

            int tempx,tempy;
            switch(i){
                case 1:
                    if(method==2)
                        continue;
                    tempx=current->col()-1;
                    tempy=current->row()-1;

                    break;
                case 2:
                    tempx=current->col();
                    tempy=current->row()-1;

                    break;
                case 3:
                    if(method==2)
                        continue;
                    tempx=current->col()+1;
                    tempy=current->row()-1;

                    break;
                case 4:
                    tempx=current->col()-1;
                    tempy=current->row();

                    break;
                case 5:
                    tempx=current->col()+1;
                    tempy=current->row();
                    break;
                case 6:
                    if(method==2)
                        continue;
                    tempx=current->col()-1;
                    tempy=current->row()+1;
                    break;
                case 7:
                    tempx=current->col();
                    tempy=current->row()+1;
                    break;
                case 8:
                    if(method==2)
                        continue;
                    tempx=current->col()+1;
                    tempy=current->row()+1;

                    break;
            }
            if((tempx>=0 && tempx <F_WIDTH)&&(tempy>=0 && tempy <F_HEIGHT)){
                Block*temp=m_grid[tempx][tempy];
          /*      if(temp->lastNode()==nullptr){
                     temp->setLastNode(current);
                }

        */
                gcost_estimated=current->GCost()+calCost(current->col(),current->row(),tempx,tempy);
                if(temp->GCost()>gcost_estimated && !temp->wallState()){
                    if(temp->ischecked==true){
                         for(QGraphicsItem*textTemp:temp->childItems()){
                             delete textTemp;
                         }
                         gCost=gcost_estimated;
                         hCost=calCost(temp->col(),temp->row(),fX,fY);
                         if(method==1)
                             hCost=0;
                         fCost=gCost+hCost;
                         if(method==2)
                             gCost=fCost=0;
                         temp->setFCost(fCost);
                         temp->setGCost(gCost);


                         temp->setColor(Color::BLUE);
                         temp->setLastNode(current);
                         //set color blue

                         text= new QGraphicsTextItem(QString::number(fCost), temp);
            //             text->setPos(temp->pos());

                         QGraphicsTextItem*gtext= new QGraphicsTextItem(QString::number(gCost),temp);
                         gtext->setPos(m_grid[sX][sY]->rect().topLeft());
                         gtext->adjustSize();

                    }else{
                            temp->ischecked=true;
                            gCost=gcost_estimated;
                            hCost=calCost(temp->col(),temp->row(),fX,fY);
                            if(method==1)
                                hCost=0;
                            fCost=gCost+hCost;
                            if(method==2){
                                gCost=fCost=0;
                            }
                            temp->setFCost(fCost);
                            temp->setGCost(gCost);

                            OpenList.push_back(temp);
                            temp->setColor(Color::BLUE);
                            temp->setLastNode(current);
                            //set color blue

                            text= new QGraphicsTextItem(QString::number(fCost), temp);
               //             text->setPos(temp->pos());

                            QGraphicsTextItem*gtext= new QGraphicsTextItem(QString::number(gCost),temp);
                            gtext->setPos(m_grid[sX][sY]->rect().topLeft());
                            gtext->adjustSize();

                          }

                }

            }

        }

        lastNode=current;
        update();
        dieTime=QTime::currentTime().addMSecs(80);
        while(QTime::currentTime()<dieTime)
            QCoreApplication::processEvents(QEventLoop::AllEvents,80);

    }
}

int my_scene::calCost(int x1, int y1, int x2, int y2)
{
    int dx,dy;
    int slope_L; //height(and width) of the slope part;
    int straight_L; //length of the plane part;
    dx=abs(x1-x2);
    dy=abs(y1-y2);
    straight_L=abs(dx-dy);
    slope_L=(dx+dy-straight_L)/2;
    int result=10*straight_L+14*slope_L;//since the spuare root of 2 is approxiamte to 1.4
                                    //we multiply 1 and 1.4 by 10 to make sure the result is always integer.
    return result;
}

void my_scene::calPath(int fx, int fy)
{
    Block*tempNode=m_grid[fx][fy];
    Block*lastTempNode=nullptr;
    tempNode->setColor(Color::YELLOW);

    while(tempNode->lastNode()!=nullptr){
        m_pathNodes.append(tempNode);

        lastTempNode=tempNode;

        tempNode=tempNode->lastNode();
        tempNode->setColor(Color::YELLOW);

        QPen pen;
        pen.setColor(Qt::green);
        pen.setWidth(G_UNIT/10);
        addLine(lastTempNode->pos().x(),lastTempNode->pos().y(),tempNode->pos().x(),tempNode->pos().y(),pen);
         update();
    }


}

void my_scene::findPathEvent()
{
    if(findPath(m_startB->col(),m_startB->row(),m_finishB->col(),m_finishB->row())   ==true){
        PathfindState=true;


        for(int i=0; i<F_HEIGHT; i++){
            for(int j=0; j<F_WIDTH; j++){
                if(m_grid[i][j]->wallState()!=true)
                    m_grid[i][j]->setColor(Color::BLANK);

                for(QGraphicsItem*tempT:m_grid[i][j]->childItems()){
                    if(tempT!=m_grid[i][j]->child()){
                        delete tempT;
                    }
                }
            }
        }
        update();
        /*
        texts.squeeze();
        for(QGraphicsTextItem*tempT : texts){
            if(tempT!=nullptr)
            delete tempT;

        }
        texts.squeeze();
        */
        calPath(m_finishB->col(),m_finishB->row());
    }else
        PathfindState=false;
}







void my_scene::mousePressEvent(QGraphicsSceneMouseEvent *event)
{
    QGraphicsScene::mousePressEvent(event);

}

