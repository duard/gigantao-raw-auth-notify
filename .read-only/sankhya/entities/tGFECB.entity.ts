import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfrcbEntity } from './tGFRCB.entity';

@Index('PK_TGFECB', ['codregua', 'codevento'], { unique: true })
@Entity('TGFECB', { schema: 'SANKHYA' })
export class TgfecbEntity {
  @Column('int', { primary: true, name: 'CODREGUA' })
  codregua: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('int', { name: 'TIPO' })
  tipo: number;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @Column('text', { name: 'FILTRO', nullable: true })
  filtro: string | null;

  @Column('int', { name: 'DIAEXEC', nullable: true })
  diaexec: number | null;

  @Column('int', { name: 'EXECAPOS', nullable: true })
  execapos: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TgfrcbEntity, (tgfrcbEntity) => tgfrcbEntity.tgfecbs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREGUA', referencedColumnName: 'codregua' }])
  codregua2: TgfrcbEntity;
}
