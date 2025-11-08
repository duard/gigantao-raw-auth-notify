import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPPR', ['dtmov', 'codprod', 'controle', 'codlocal'], {
  unique: true,
})
@Entity('TGFPPR', { schema: 'SANKHYA' })
export class TgfpprEntity {
  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "''",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'ENTRADA', nullable: true, precision: 53 })
  entrada: number | null;

  @Column('float', { name: 'ESTOQUE', nullable: true, precision: 53 })
  estoque: number | null;

  @Column('char', { name: 'MAQUINA', nullable: true, length: 1 })
  maquina: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
