import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFNCE', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFNCE', { schema: 'SANKHYA' })
export class TgfnceEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'C'" })
  tipo: string;

  @Column('int', { name: 'TIPOTRANSP', default: () => '(0)' })
  tipotransp: number;

  @Column('char', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('char', { name: 'INSCESTAD', nullable: true, length: 16 })
  inscestad: string | null;

  @Column('int', { name: 'CODMUNFIS', nullable: true })
  codmunfis: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfnces, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfnces)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
