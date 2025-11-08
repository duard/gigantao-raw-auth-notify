import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TSIFIL', ['nomefila'], { unique: true })
@Entity('TSIFIL', { schema: 'SANKHYA' })
export class TsifilEntity {
  @Column('char', { primary: true, name: 'NOMEFILA', length: 30 })
  nomefila: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'TIPOIMPRESSORA', length: 1, default: () => "'1'" })
  tipoimpressora: string;

  @Column('varchar', { name: 'IMPRESSORA', nullable: true, length: 255 })
  impressora: string | null;

  @Column('int', { name: 'REMBCO', nullable: true })
  rembco: number | null;

  @Column('int', { name: 'REMFINAL', nullable: true })
  remfinal: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsifils)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsifils)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;
}
