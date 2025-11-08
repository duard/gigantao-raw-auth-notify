import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfecbEntity } from './tGFECB.entity';

@Index('PK_TGFRCB', ['codregua'], { unique: true })
@Entity('TGFRCB', { schema: 'SANKHYA' })
export class TgfrcbEntity {
  @Column('int', { primary: true, name: 'CODREGUA' })
  codregua: number;

  @Column('varchar', { name: 'DESCREGUA', length: 60 })
  descregua: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @Column('int', { name: 'HORAEXEC' })
  horaexec: number;

  @Column('datetime', { name: 'ULTEXECUCAO', nullable: true })
  ultexecucao: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DTDESATAUT', nullable: true })
  dtdesataut: Date | null;

  @Column('datetime', { name: 'DHATIVA', nullable: true })
  dhativa: Date | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @OneToMany(() => TgfecbEntity, (tgfecbEntity) => tgfecbEntity.codregua2)
  tgfecbs: TgfecbEntity[];
}
