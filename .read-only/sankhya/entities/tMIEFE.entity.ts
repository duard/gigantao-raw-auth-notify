import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TmicauEntity } from './tMICAU.entity';
import { TmiexeEntity } from './tMIEXE.entity';
import { TmimetEntity } from './tMIMET.entity';

@Index('PK_TMIEFE', ['nuefeito'], { unique: true })
@Entity('TMIEFE', { schema: 'SANKHYA' })
export class TmiefeEntity {
  @Column('int', { primary: true, name: 'NUEFEITO' })
  nuefeito: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 220 })
  descricao: string | null;

  @Column('datetime', { name: 'DTANALISE' })
  dtanalise: Date;

  @Column('varchar', { name: 'OBSERVACAO', length: 3103 })
  observacao: string;

  @Column('int', { name: 'CODUNG' })
  codung: number;

  @Column('datetime', { name: 'PERINI', nullable: true })
  perini: Date | null;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @OneToMany(() => TmicauEntity, (tmicauEntity) => tmicauEntity.nuefeito2)
  tmicaus: TmicauEntity[];

  @ManyToOne(() => TmiexeEntity, (tmiexeEntity) => tmiexeEntity.tmiefes)
  @JoinColumn([{ name: 'CODEXE', referencedColumnName: 'codexe' }])
  codexe: TmiexeEntity;

  @ManyToOne(() => TmimetEntity, (tmimetEntity) => tmimetEntity.tmiefes)
  @JoinColumn([{ name: 'NUMET', referencedColumnName: 'numet' }])
  numet: TmimetEntity;
}
