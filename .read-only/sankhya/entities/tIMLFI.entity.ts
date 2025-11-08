import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMLFI', ['lfiimovel', 'lfidata', 'lfitipo', 'lfipath'], {
  unique: true,
})
@Entity('TIMLFI', { schema: 'SANKHYA' })
export class TimlfiEntity {
  @Column('int', { primary: true, name: 'LFIIMOVEL' })
  lfiimovel: number;

  @Column('datetime', {
    primary: true,
    name: 'LFIDATA',
    default: () => 'getdate()',
  })
  lfidata: Date;

  @Column('char', { primary: true, name: 'LFITIPO', length: 1 })
  lfitipo: string;

  @Column('varchar', { primary: true, name: 'LFIPATH', length: 255 })
  lfipath: string;

  @Column('char', { name: 'LFILEGADO', nullable: true, length: 1 })
  lfilegado: string | null;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timlfis)
  @JoinColumn([{ name: 'LFIIMOVEL', referencedColumnName: 'imvcodigo' }])
  lfiimovel2: TimimvEntity;
}
