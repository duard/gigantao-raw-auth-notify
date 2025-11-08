import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFIES', ['nunota', 'sequencia', 'codparc', 'dtinicio'], {
  unique: true,
})
@Index('TGFIES_I01', ['nunotapedcompra'], {})
@Entity('TGFIES', { schema: 'SANKHYA' })
export class TgfiesEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('decimal', { name: 'VALOR', nullable: true, precision: 11, scale: 2 })
  valor: number | null;

  @Column('int', { name: 'NUNOTAPEDCOMPRA', nullable: true })
  nunotapedcompra: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfies)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
