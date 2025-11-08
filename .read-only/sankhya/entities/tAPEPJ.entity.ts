import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TcibemEntity } from './tCIBEM.entity';

@Index('PK_TAPEPJ', ['codproj', 'codprod', 'codbem', 'dhinicial'], {
  unique: true,
})
@Entity('TAPEPJ', { schema: 'SANKHYA' })
export class TapepjEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { name: 'CODPROJFINAL' })
  codprojfinal: number;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @Column('datetime', { primary: true, name: 'DHINICIAL' })
  dhinicial: Date;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapepjs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tapepjs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;
}
