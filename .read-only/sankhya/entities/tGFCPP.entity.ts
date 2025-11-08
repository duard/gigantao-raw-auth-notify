import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFCPP', ['codprod', 'codparc', 'tipmov'], { unique: true })
@Entity('TGFCPP', { schema: 'SANKHYA' })
export class TgfcppEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DTULT' })
  dtult: Date;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('money', { name: 'VLRUNIT' })
  vlrunit: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfcpps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcpps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
