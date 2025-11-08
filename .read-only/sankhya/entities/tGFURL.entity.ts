import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TGFURL', ['coduf', 'servico', 'tipservico'], { unique: true })
@Entity('TGFURL', { schema: 'SANKHYA' })
export class TgfurlEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { primary: true, name: 'SERVICO', length: 1 })
  servico: string;

  @Column('varchar', { primary: true, name: 'TIPSERVICO', length: 1 })
  tipservico: string;

  @Column('varchar', { name: 'URLPRODUCAO', nullable: true, length: 255 })
  urlproducao: string | null;

  @Column('varchar', { name: 'URLHOMOLOGACAO', nullable: true, length: 255 })
  urlhomologacao: string | null;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfurls)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
