import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcmvEntity } from './tGFCMV.entity';

@Index('PK_TGFUCM', ['codconfig', 'codusu', 'codgrupo'], { unique: true })
@Index('TGFUCM_I01', ['codconfig'], {})
@Entity('TGFUCM', { schema: 'SANKHYA' })
export class TgfucmEntity {
  @Column('int', { primary: true, name: 'CODCONFIG' })
  codconfig: number;

  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRUPO', default: () => '(0)' })
  codgrupo: number;

  @Column('varchar', { name: 'CONSULTAR', length: 1, default: () => "'S'" })
  consultar: string;

  @ManyToOne(() => TgfcmvEntity, (tgfcmvEntity) => tgfcmvEntity.tgfucms, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCONFIG', referencedColumnName: 'codconfig' }])
  codconfig2: TgfcmvEntity;
}
