import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPPE', ['dtmov', 'codprod', 'controle', 'codlocal'], {
  unique: true,
})
@Entity('TGFPPE', { schema: 'SANKHYA' })
export class TgfppeEntity {
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

  @Column('float', { name: 'ENTRADA', nullable: true, precision: 53 })
  entrada: number | null;

  @Column('char', { name: 'SOMADO', length: 1, default: () => "'N'" })
  somado: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfppes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
