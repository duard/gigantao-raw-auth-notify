import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TAPPFA', ['codproj', 'nometab', 'idobjeto', 'codprod'], {
  unique: true,
})
@Entity('TAPPFA', { schema: 'SANKHYA' })
export class TappfaEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('char', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('char', { primary: true, name: 'IDOBJETO', length: 50 })
  idobjeto: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tappfas)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tappfas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
